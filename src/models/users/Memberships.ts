export interface Memberships {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  benefits: string[];
  level: string;
  discountPercent: number;
  requiredPoints: number;
  description: string;
}
