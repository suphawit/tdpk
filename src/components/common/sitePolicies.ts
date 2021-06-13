interface IPolicies {
  label: string;
  path: string;
}

export const sitePolicies: IPolicies[] = [
  {
    label: 'Privacy Policy',
    path: '/privacy-policy',
  },
  {
    label: 'Terms and Conditions',
    path: '/terms-conditions',
  },
];
