import { Routes } from '@angular/router';

export const routes: Routes = [
  // Law Firm flow
  { path: 'law-firm/0-type-selection', loadComponent: () => import('./screens/onboarding/law-firm/type-selection').then(m => m.LfTypeSelection) },
  { path: 'law-firm/1-persona-closed', loadComponent: () => import('./screens/onboarding/law-firm/persona-closed').then(m => m.LfPersonaClosed) },
  { path: 'law-firm/2-persona-open', loadComponent: () => import('./screens/onboarding/law-firm/persona-open').then(m => m.LfPersonaOpen) },
  { path: 'law-firm/3-create-account', loadComponent: () => import('./screens/onboarding/law-firm/create-account').then(m => m.LfCreateAccount) },
  { path: 'law-firm/4-firm-details', loadComponent: () => import('./screens/onboarding/law-firm/firm-details').then(m => m.LfFirmDetails) },
  { path: 'law-firm/5-collaborators-empty', loadComponent: () => import('./screens/onboarding/law-firm/collaborators-empty').then(m => m.LfCollaboratorsEmpty) },
  { path: 'law-firm/6-collaborators-filled', loadComponent: () => import('./screens/onboarding/law-firm/collaborators-filled').then(m => m.LfCollaboratorsFilled) },
  { path: 'law-firm/7-terms-privacy', loadComponent: () => import('./screens/onboarding/law-firm/terms-privacy').then(m => m.LfTermsPrivacy) },
  { path: 'law-firm/8-choose-plan', loadComponent: () => import('./screens/onboarding/law-firm/choose-plan').then(m => m.LfChoosePlan) },

  // Student flow
  { path: 'student/0-type-selection', loadComponent: () => import('./screens/onboarding/student/type-selection').then(m => m.StTypeSelection) },
  { path: 'student/1-persona-open', loadComponent: () => import('./screens/onboarding/student/persona-open').then(m => m.StPersonaOpen) },
  { path: 'student/2-create-account', loadComponent: () => import('./screens/onboarding/student/create-account').then(m => m.StCreateAccount) },
  { path: 'student/3-student-details', loadComponent: () => import('./screens/onboarding/student/student-details').then(m => m.StStudentDetails) },
  { path: 'student/4-collaborators-empty', loadComponent: () => import('./screens/onboarding/student/collaborators-empty').then(m => m.StCollaboratorsEmpty) },
  { path: 'student/5-collaborators-filled', loadComponent: () => import('./screens/onboarding/student/collaborators-filled').then(m => m.StCollaboratorsFilled) },
  { path: 'student/6-terms-privacy', loadComponent: () => import('./screens/onboarding/student/terms-privacy').then(m => m.StTermsPrivacy) },
  { path: 'student/7-choose-plan', loadComponent: () => import('./screens/onboarding/student/choose-plan').then(m => m.StChoosePlan) },

  // Combined comparison screens
  { path: 'compare/type-selection', loadComponent: () => import('./screens/onboarding/combined/type-selection').then(m => m.CompareTypeSelection) },
  { path: 'compare/persona', loadComponent: () => import('./screens/onboarding/combined/persona').then(m => m.ComparePersona) },
  { path: 'compare/create-account', loadComponent: () => import('./screens/onboarding/combined/create-account').then(m => m.CompareCreateAccount) },
  { path: 'compare/details', loadComponent: () => import('./screens/onboarding/combined/details').then(m => m.CompareDetails) },
  { path: 'compare/collaborators', loadComponent: () => import('./screens/onboarding/combined/collaborators').then(m => m.CompareCollaborators) },
  { path: 'compare/terms-privacy', loadComponent: () => import('./screens/onboarding/combined/terms-privacy').then(m => m.CompareTermsPrivacy) },
  { path: 'compare/choose-plan', loadComponent: () => import('./screens/onboarding/combined/choose-plan').then(m => m.CompareChoosePlan) },

  // Screen index (old landing page)
  { path: 'screens', loadComponent: () => import('./screens/onboarding/index').then(m => m.ScreenIndex) },

  // Default: Design System showcase
  { path: '', loadComponent: () => import('./screens/components-gallery/components-gallery').then(m => m.ComponentsGallery) },
  { path: '**', redirectTo: '' },
];
