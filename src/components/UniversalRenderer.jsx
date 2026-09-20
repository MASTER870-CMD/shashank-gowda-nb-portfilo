import React from 'react';

// Helper to parse inline styles (Bold, Italic, Links, Code)
function parseInline(text) {
  if (!text) return null;
  
  // A simple tokenizer to safely parse inline markdown without dangerous regex overlap.
  const parts = [];
  let current = '';
  let i = 0;

  while (i < text.length) {
    // Links: [text](url)
    if (text[i] === '[' && text.indexOf('](', i) !== -1 && text.indexOf(')', text.indexOf('](', i)) !== -1) {
      if (current) parts.push({ type: 'text', content: current });
      current = '';
      const textEnd = text.indexOf('](', i);
      const linkText = text.substring(i + 1, textEnd);
      const urlEnd = text.indexOf(')', textEnd);
      const url = text.substring(textEnd + 2, urlEnd);
      parts.push({ type: 'link', text: linkText, url });
      i = urlEnd + 1;
      continue;
    }

    // Bold: **text**
    if (text[i] === '*' && text[i+1] === '*' && text.indexOf('**', i + 2) !== -1) {
      if (current) parts.push({ type: 'text', content: current });
      current = '';
      const end = text.indexOf('**', i + 2);
      parts.push({ type: 'bold', content: text.substring(i + 2, end) });
      i = end + 2;
      continue;
    }

    // Italic: *text*
    if (text[i] === '*' && text[i+1] !== '*' && text.indexOf('*', i + 1) !== -1) {
      if (current) parts.push({ type: 'text', content: current });
      current = '';
      const end = text.indexOf('*', i + 1);
      parts.push({ type: 'italic', content: text.substring(i + 1, end) });
      i = end + 1;
      continue;
    }

    // Inline Code: `text`
    if (text[i] === '`' && text.indexOf('`', i + 1) !== -1) {
      if (current) parts.push({ type: 'text', content: current });
      current = '';
      const end = text.indexOf('`', i + 1);
      parts.push({ type: 'code', content: text.substring(i + 1, end) });
      i = end + 1;
      continue;
    }

    current += text[i];
    i++;
  }
  if (current) parts.push({ type: 'text', content: current });

  return parts.map((part, index) => {
    if (part.type === 'link') {
      return (
        <a key={index} href={part.url} target={part.url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-[#C1603A] hover:underline font-bold transition-colors break-words">
          {part.text}
        </a>
      );
    }
    if (part.type === 'bold') return <strong key={index} className="font-bold text-[#24211E]">{part.content}</strong>;
    if (part.type === 'italic') return <em key={index} className="italic">{part.content}</em>;
    if (part.type === 'code') return <code key={index} className="bg-[#24211E]/10 px-1.5 py-0.5 rounded font-mono text-sm text-[#C1603A]">{part.content}</code>;
    return <React.Fragment key={index}>{part.content}</React.Fragment>;
  });
}

export default function UniversalRenderer({ content }) {
  if (!content) return null;

  // Split content by blank lines to get discrete blocks
  const rawBlocks = content.split(/\n\s*\n/);
  const blocks = rawBlocks.map(block => block.trim()).filter(Boolean);

  const isHeadingLine = (line) => {
    const l = line.trim();
    if (l.startsWith('#')) return true;
    const knownSections = [
      'the challenge', 'the problem', 'problem', 'the solution', 'solution',
      'architecture', 'architecture & execution', 'technical architecture',
      'implementation', 'development', 'key features', 'features', 'technology',
      'tech stack', 'business impact', 'results', 'outcomes', 'performance',
      'challenges', 'learnings', 'what i learned', 'future improvements', 'conclusion'
    ];
    if (l.split(' ').length <= 4 && knownSections.includes(l.toLowerCase())) return true;
    return false;
  };

  const isMetric = (line) => {
    const l = line.toLowerCase();
    const hasNumber = /\d/.test(l);
    const hasMetricKeyword = /(users|accuracy|response time|ms|api endpoints|deployments|recovered|₹|\$|%)/.test(l);
    return hasNumber && hasMetricKeyword && l.length < 50;
  };

  const isFlow = (block) => {
    const lines = block.split('\n');
    const flowArrows = ['↓', '->', '→'];
    const isVerticalFlow = lines.some(l => flowArrows.includes(l.trim()));
    const isHorizontalFlow = lines.length === 1 && flowArrows.some(arrow => lines[0].includes(arrow)) && lines[0].split(new RegExp(flowArrows.join('|'))).length > 1;
    return isVerticalFlow || isHorizontalFlow;
  };

  const isDecision = (block) => {
    const lines = block.split('\n');
    return lines.length > 1 && lines.every(l => l.includes('→') || l.includes('->')) && lines.some(l => /^[A-Z\s]+/.test(l.split(/→|->/)[0]));
  };

  const renderedBlocks = [];
  let currentList = null;

  const flushList = () => {
    if (!currentList) return;
    const { type, items, start } = currentList;
    const Tag = type === 'numbered' ? 'ol' : 'ul';
    const isIntelligent = items.some(item => item.description.length > 0);
    
    if (isIntelligent) {
      renderedBlocks.push(
        <Tag key={`list-${renderedBlocks.length}`} start={type === 'numbered' && start !== 1 ? start : undefined} className={`my-8 space-y-8 w-full ${type === 'numbered' ? 'list-decimal list-outside ml-6' : ''}`}>
          {items.map((item, idx) => (
            <li key={idx} className={`${type === 'bullet' ? 'flex items-start gap-4' : 'pl-2'}`}>
              {type === 'bullet' && <span className="text-[#C1603A] mt-1.5 shrink-0">•</span>}
              <div className="w-full">
                <strong className="block font-['Epilogue'] text-lg text-[#24211E] mb-2 break-words">{parseInline(item.title)}</strong>
                {item.description.length > 0 && (
                  <p className="font-['Literata'] text-lg text-[#3C4A3E] leading-relaxed break-words">
                    {parseInline(item.description.join(' '))}
                  </p>
                )}
              </div>
            </li>
          ))}
        </Tag>
      );
    } else {
      const isTechStack = items.every(item => item.title.length < 30);
      if (isTechStack && items.length >= 3) {
        renderedBlocks.push(
          <div key={`list-${renderedBlocks.length}`} className="my-8 flex flex-wrap gap-3">
            {items.map((item, idx) => (
              <span key={idx} className="px-4 py-2 bg-[#24211E]/5 border border-[#24211E]/20 font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#24211E] break-words">
                {parseInline(item.title)}
              </span>
            ))}
          </div>
        );
      } else {
        renderedBlocks.push(
          <Tag key={`list-${renderedBlocks.length}`} start={type === 'numbered' && start !== 1 ? start : undefined} className={`my-8 space-y-3 font-['Literata'] text-xl text-[#3C4A3E] leading-relaxed w-full ${type === 'numbered' ? 'list-decimal list-outside ml-6' : ''}`}>
            {items.map((item, idx) => (
              <li key={idx} className={`${type === 'bullet' ? 'flex items-start gap-4' : 'pl-2'} break-words`}>
                {type === 'bullet' && <span className="text-[#C1603A] mt-1.5 shrink-0">•</span>}
                <span>{parseInline(item.title)}</span>
              </li>
            ))}
          </Tag>
        );
      }
    }
    currentList = null;
  };
  
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const lines = block.split('\n').map(l => l.trim());

    // 1. Code Block
    if (block.startsWith('```')) {
      flushList();
      const codeLines = block.split('\n');
      const code = codeLines.slice(1, codeLines[codeLines.length - 1].trim() === '```' ? -1 : undefined).join('\n');
      renderedBlocks.push(
        <div key={i} className="my-8 overflow-x-auto rounded border border-[#24211E]/20 bg-[#24211E] w-full max-w-full">
          <pre className="p-6 font-mono text-sm text-[#FAF6F0] leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      );
      continue;
    }

    // 2. Heading
    if (lines.length === 1 && isHeadingLine(lines[0])) {
      flushList();
      let level = 2;
      let text = lines[0];
      if (text.startsWith('###')) { level = 3; text = text.replace(/^###\s*/, ''); }
      else if (text.startsWith('##')) { level = 2; text = text.replace(/^##\s*/, ''); }
      else if (text.startsWith('#')) { level = 1; text = text.replace(/^#\s*/, ''); }
      else {
        level = 2;
      }

      if (level === 1) {
        renderedBlocks.push(<h1 key={i} className="font-['Epilogue'] text-4xl md:text-5xl font-bold tracking-tight text-[#24211E] mt-12 mb-6 break-words">{parseInline(text)}</h1>);
      } else if (level === 2) {
        renderedBlocks.push(
          <h2 key={i} className="font-['Epilogue'] text-[#C1603A] text-sm md:text-base font-bold uppercase tracking-widest mt-16 mb-8 flex items-center gap-4 break-words">
            <span className="w-8 h-[2px] bg-[#C1603A] shrink-0"></span> {parseInline(text)}
          </h2>
        );
      } else {
        renderedBlocks.push(<h3 key={i} className="font-['Epilogue'] text-2xl font-bold text-[#24211E] mt-10 mb-4 break-words">{parseInline(text)}</h3>);
      }
      continue;
    }

    // 3. Architecture Flow
    if (isFlow(block)) {
      flushList();
      const flowArrows = ['↓', '->', '→'];
      let steps = [];
      if (lines.some(l => flowArrows.includes(l.trim()))) {
        steps = lines.filter(l => !flowArrows.includes(l.trim()));
      } else {
        let separator = flowArrows.find(a => lines[0].includes(a));
        steps = lines[0].split(separator).map(s => s.trim());
      }
      
      renderedBlocks.push(
        <div key={i} className="my-10 p-6 md:p-10 bg-[#24211E]/5 border border-[#24211E]/10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 rounded-sm w-full">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="font-['Epilogue'] text-sm md:text-base font-bold uppercase tracking-widest text-[#24211E] text-center px-4 py-3 bg-[#FAF6F0] border border-[#24211E]/20 shadow-sm w-full md:w-auto break-words">
                {parseInline(step)}
              </div>
              {idx < steps.length - 1 && (
                <div className="text-[#C1603A] font-bold md:-rotate-90 shrink-0">
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      );
      continue;
    }

    // 4. Decision Block
    if (isDecision(block)) {
      flushList();
      renderedBlocks.push(
        <div key={i} className="my-8 space-y-3 w-full">
          {lines.map((line, idx) => {
            const separator = line.includes('→') ? '→' : '->';
            const parts = line.split(separator);
            const condition = parts[0].trim();
            const action = parts.slice(1).join(separator).trim();
            return (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-4 bg-[#FAF6F0] border border-[#24211E]/10 rounded-sm">
                <div className="font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#C1603A] bg-[#C1603A]/10 px-3 py-1 self-start sm:w-1/3 break-words">
                  {condition}
                </div>
                <div className="font-['Literata'] text-[#3C4A3E] sm:w-2/3 break-words">
                  {parseInline(action)}
                </div>
              </div>
            );
          })}
        </div>
      );
      continue;
    }

    // 5. Intelligent List (Numbered + Description) OR Bullet list
    let isList = true;
    let listType = null;
    const parsedListItems = [];
    let currentItem = null;

    for (let l = 0; l < lines.length; l++) {
      const line = lines[l];
      const isBullet = line.startsWith('- ') || line.startsWith('* ') || line.startsWith('• ');
      const isNumber = /^\d+\.\s/.test(line);
      
      if (isBullet || isNumber) {
        if (currentItem) parsedListItems.push(currentItem);
        if (!listType) listType = isBullet ? 'bullet' : 'numbered';
        
        currentItem = {
          title: line.replace(/^-\s|^\*\s|^•\s|^\d+\.\s/, ''),
          description: []
        };
      } else if (currentItem) {
        currentItem.description.push(line);
      } else {
        isList = false;
        break;
      }
    }
    
    if (currentItem) parsedListItems.push(currentItem);

    if (isList && parsedListItems.length > 0) {
      if (currentList && currentList.type === listType) {
        currentList.items.push(...parsedListItems);
      } else {
        flushList();
        let startNum = null;
        if (listType === 'numbered') {
          const match = lines[0].match(/^(\d+)\.\s/);
          if (match) startNum = parseInt(match[1], 10);
        }
        currentList = {
          type: listType,
          start: startNum,
          items: parsedListItems
        };
      }
      continue;
    }

    // 6. Metrics Grid Detection
    const possibleMetrics = lines.filter(l => isMetric(l));
    if (possibleMetrics.length === lines.length && lines.length > 1) {
      flushList();
      renderedBlocks.push(
        <div key={i} className="my-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {lines.map((metric, idx) => {
            const numMatch = metric.match(/[\d.,+%₹$]+/);
            const num = numMatch ? numMatch[0] : '';
            const text = metric.replace(num, '').trim();
            return (
              <div key={idx} className="p-6 bg-[#24211E] text-center border-l-4 border-[#C1603A] w-full break-words">
                <div className="font-['Epilogue'] text-3xl font-bold text-[#FAF6F0] mb-2">{num}</div>
                <div className="font-['Epilogue'] text-xs uppercase tracking-widest text-[#FAF6F0]/70 font-bold">{text || metric}</div>
              </div>
            );
          })}
        </div>
      );
      continue;
    }

    // 7. Tech Stack plain list
    if (lines.length >= 3 && lines.every(l => l.length < 25 && !l.includes(' '))) {
      flushList();
      renderedBlocks.push(
        <div key={i} className="my-8 flex flex-wrap gap-3">
          {lines.map((item, idx) => (
            <span key={idx} className="px-4 py-2 bg-[#24211E]/5 border border-[#24211E]/20 font-['Epilogue'] text-xs font-bold uppercase tracking-widest text-[#24211E] break-words">
              {parseInline(item)}
            </span>
          ))}
        </div>
      );
      continue;
    }

    // 8. Default Paragraph
    flushList();
    renderedBlocks.push(
      <p key={i} className="font-['Literata'] text-[#3C4A3E] text-xl md:text-2xl leading-[1.8] my-6 break-words">
        {parseInline(block.replace(/\n/g, ' '))}
      </p>
    );
  }

  flushList();

  return <div className="universal-case-study-content w-full">{renderedBlocks}</div>;
}
