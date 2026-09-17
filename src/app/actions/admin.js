'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export async function authenticateAdmin(password) {
  // Simple env-based password check
  const adminPassword = process.env.ADMIN_PASSWORD || 'shashank-admin-2026';
  if (password === adminPassword) {
    return { success: true };
  }
  return { success: false, error: 'Invalid admin credentials' };
}

export async function uploadProject(formData) {
  try {
    const title = formData.get('title');
    const desc = formData.get('desc');
    const category = formData.get('category');
    const tech = formData.get('tech')?.split(',').map(t => t.trim()) || [];
    const live = formData.get('live') || '#';
    const code = formData.get('code') || '#';
    const problem = formData.get('problem') || '';
    const built = formData.get('built') || '';
    const learned = formData.get('learned') || '';
    const imageFile = formData.get('image');

    let imageUrl = '';

    // If an image was uploaded, convert to base64 and store inline in Firestore
    // (matches existing data format — no Firebase Storage dependency needed)
    if (imageFile && imageFile.size > 0) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const base64String = Buffer.from(uint8Array).toString('base64');
      imageUrl = `data:${imageFile.type};base64,${base64String}`;
    }

    const projectData = {
      title,
      desc,
      category,
      tech,
      live,
      code,
      problem,
      built,
      learned,
      image: imageUrl,
      date: new Date().toISOString(),
    };

    // Save to Firestore
    const docRef = await addDoc(collection(db, 'projects'), projectData);
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error uploading project:', error);
    return { success: false, error: error.message };
  }
}

export async function updateProject(id, formData) {
  try {
    const title = formData.get('title');
    const desc = formData.get('desc');
    const category = formData.get('category');
    const tech = formData.get('tech')?.split(',').map(t => t.trim()) || [];
    const live = formData.get('live') || '#';
    const code = formData.get('code') || '#';
    const problem = formData.get('problem') || '';
    const built = formData.get('built') || '';
    const learned = formData.get('learned') || '';
    const imageFile = formData.get('image');

    const projectData = {
      title,
      desc,
      category,
      tech,
      live,
      code,
      problem,
      built,
      learned,
      // Do not update date, keep original date
    };

    // If an image was uploaded, convert to base64 and update
    if (imageFile && imageFile.size > 0) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const base64String = Buffer.from(uint8Array).toString('base64');
      projectData.image = `data:${imageFile.type};base64,${base64String}`;
    }

    const docRef = doc(db, 'projects', id);
    await updateDoc(docRef, projectData);
    
    return { success: true };
  } catch (error) {
    console.error('Error updating project:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteProject(id) {
  try {
    const docRef = doc(db, 'projects', id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error('Error deleting project:', error);
    return { success: false, error: error.message };
  }
}
