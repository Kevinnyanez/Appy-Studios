export type ProjectType = 'website' | 'webapp' | null;

export interface BrandBriefData {
  projectType: ProjectType;
  
  // Website specific
  mainObjective?: string;
  visualStyle?: string;
  sections?: string[];
  targetAudience?: string;
  
  // Web App specific
  mainFeatures?: string[];
  userRoles?: string[];
  dataHandling?: string;
  projectCategory?: string;
  
  // Common
  budget?: string;
}

export interface StepProps {
  data: BrandBriefData;
  updateData: (updates: Partial<BrandBriefData>) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}
