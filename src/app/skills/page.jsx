import { redirect } from 'next/navigation';

/**
 * /skills redirects to the main skills matrix page.
 * The matrix page contains all the tech stack information.
 */
export default function SkillsPage() {
  redirect('/matrix');
}
