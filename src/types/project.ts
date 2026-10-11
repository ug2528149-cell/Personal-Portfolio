export type ProjectStatus =
  | 'completed'
  | 'in-progress'
  | 'planned';

/**
 * Project category for filtering and visual labels.
 */
export type ProjectCategory =
  | 'mobile'
  | 'web'
  | 'backend'
  | 'ui-ux'
  | 'full-stack'
  | 'other';

/**
 * Technology information displayed in project cards and details.
 */
export interface ProjectTechnology {
  id: string;
  name: string;
}

/**
 * A single project achievement or key feature.
 */
export interface ProjectFeature {
  id: string;
  title: string;
  description: string;
}

/**
 * Core portfolio project information.
 */
export interface Project {
  /**
   * Stable, unique identifier.
   * Used to find a project and pass it through navigation.
   */
  id: string;

  /**
   * Project title shown on the portfolio screen.
   */
  title: string;

  /**
   * Short summary for project cards.
   */
  summary: string;

  /**
   * Problem the project was designed to solve.
   */
  problem: string;

  /**
   * Work personally completed by the student.
   */
  contribution: string;

  /**
   * Technologies genuinely used in the project.
   */
  technologies: ProjectTechnology[];

  /**
   * Main category for organization and filtering.
   */
  category: ProjectCategory;

  /**
   * Current project status.
   */
  status: ProjectStatus;

  /**
   * Longer explanation shown on the details screen.
   */
  description: string;

  /**
   * Important features or implementation highlights.
   */
  features: ProjectFeature[];

  /**
   * Optional local image URI or bundled asset identifier.
   * Keep this optional when a project has no image.
   */
  imageUri?: string;

  /**
   * Optional repository URL.
   * Only populate this when the repository exists and is accessible.
   */
  repositoryUrl?: string;

  /**
   * Optional live demonstration URL.
   * May require an internet connection.
   */
  demoUrl?: string;

  /**
   * Whether the project can be presented without internet access.
   */
  worksOffline: boolean;

  /**
   * ISO date string, for example: 2026-09-15.
   */
  createdAt: string;

  /**
   * Optional last-update date in ISO format.
   */
  updatedAt?: string;
}

/**
 * Lightweight project data for list cards.
 */
export type ProjectPreview = Pick<
  Project,
  | 'id'
  | 'title'
  | 'summary'
  | 'category'
  | 'status'
  | 'technologies'
  | 'imageUri'
>;

/**
 * Data needed when creating a new project.
 */
export type CreateProjectInput = Omit<
  Project,
  'id' | 'createdAt' | 'updatedAt'
>;

/**
 * Editable project fields.
 */
export type UpdateProjectInput = Partial<
  Omit<Project, 'id' | 'createdAt'>
>;

/**
 * Project navigation parameters.
 *
 * Pass the project ID rather than duplicating the whole object.
 */
export type ProjectDetailsParams = {
  projectId: Project['id'];
};