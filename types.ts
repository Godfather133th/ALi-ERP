export type Language = 'en' | 'ar';

export interface User {
  id: string;
  name: string;
  role: string;
  ministryId: string;
  avatar: string;
}

export interface Ministry {
  id: string;
  nameEn: string;
  nameAr: string;
  logo: string;
}

// HR Types
export interface Employee {
  id: string;
  fullNameAr: string;
  fullNameEn: string;
  position: string;
  department: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  salary: number;
  joinDate: string;
  leaveBalance: number;
  code: string;
  company: string;
  jobType: string;
}

export interface Shift {
  id: string;
  nameEn: string;
  nameAr: string;
  startTime: string;
  endTime: string;
}

export interface TrainingCourse {
  id: string;
  titleEn: string;
  titleAr: string;
  provider: string;
  startDate: string;
  attendees: number;
  status: 'Scheduled' | 'In Progress' | 'Completed';
}

export interface JobApplication {
  id: string;
  candidateName: string;
  position: string;
  stage: 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Hired';
  date: string;
}

// Finance Types
export interface BudgetItem {
  id: string;
  sectionType: 'I' | 'II'; // I = Salaries, II = Operational
  code: string;
  itemEn: string;
  itemAr: string;
  allocation: number;
  spent: number;
}

export interface CashAdvance {
  id: string;
  type: 'Permanent' | 'Temporary';
  recipient: string;
  amount: number;
  descriptionEn: string;
  descriptionAr: string;
  status: 'Pending' | 'Approved' | 'Liquidated';
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  balance: number;
  currency: string;
  lastReconciled: string;
}

export interface Account {
  id: string;
  code: string;
  nameEn: string;
  nameAr: string;
  type: 'Asset' | 'Liability' | 'Equity' | 'Income' | 'Expense';
  isGroup: boolean;
  balance: number;
  children?: Account[];
}

export interface JournalEntry {
  id: string;
  date: string;
  reference: string;
  description: string;
  totalDebit: number;
  totalCredit: number;
  status: 'Draft' | 'Posted' | 'Cancelled';
}

export interface Invoice {
  id: string;
  type: 'Sales' | 'Purchase';
  partyName: string;
  date: string;
  dueDate: string;
  total: number;
  status: 'Draft' | 'Unpaid' | 'Paid' | 'Overdue';
}

// SCM Types
export interface ProcurementRequest {
  id: string;
  description: string;
  requester: string;
  amount: number;
  status: 'Request' | 'Pricing' | 'Supplier Selection' | 'Receiving' | 'Payment';
  date: string;
}

export interface InventoryItem {
  id: string;
  nameEn: string;
  nameAr: string;
  sku: string;
  warehouse: string;
  quantity: number;
  unit: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  group: string;
  brand: string;
}

export interface FixedAsset {
  id: string;
  nameEn: string;
  nameAr: string;
  purchaseDate: string;
  value: number;
  depreciationMethod: 'Fixed Monthly' | 'Actual Days';
  location: string;
  bookValue: number;
}

export interface MaterialRequest {
    id: string;
    date: string;
    user: string;
    purpose: string;
    requiredDate: string;
    items: {
        itemCode: string;
        qty: number;
        warehouse: string;
    }[];
    status: 'Draft' | 'Pending' | 'Ordered';
}

export interface StockEntry {
    id: string;
    date: string;
    type: 'Material Receipt' | 'Material Issue' | 'Material Transfer';
    sourceWarehouse?: string;
    targetWarehouse?: string;
    items: {
        itemCode: string;
        qty: number;
    }[];
    status: 'Draft' | 'Submitted';
}

// ESS Types
export interface LeaveRequest {
  id: string;
  type: 'Vacation' | 'Sick' | 'Emergency';
  startDate: string;
  days: number;
  status: 'Pending' | 'Approved' | 'Rejected';
}