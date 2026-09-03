import { NextResponse } from 'next/server';
import { fetchProjects } from '@/lib/projects.service';

/**
 * GET /api/projects
 * Backend-only API Route: Fetches from Firebase Firestore securely on the server.
 * No credentials or private configurations are exposed to the client.
 */
export async function GET() {
  try {
    const projects = await fetchProjects();
    return NextResponse.json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch projects from Firestore'
      },
      { status: 500 }
    );
  }
}
