import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Landmark, 
  Package, 
  LogOut, 
  Globe, 
  Bell, 
  Search,
  Menu,
  Briefcase,
  FileText,
  CreditCard,
  Truck,
  GraduationCap,
  UserPlus,
  Wallet,
  Building,
  ClipboardList,
  CheckCircle,
  Clock,
  UserCircle,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  Plus,
  ShoppingCart,
  FileSpreadsheet,
  Settings,
  PieChart as PieChartIcon,
  Archive,
  Layers,
  Box,
  TrendingUp,
  Activity,
  BookOpen,
  Receipt,
  List,
  ChevronDown,
  Heart,
  X,
  FileBox,
  Home,
  ArrowRightLeft,
  BarChart2,
  MoreHorizontal,
  Lock,
  User as UserIcon
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from 'recharts';
import { TRANSLATIONS, MINISTRIES, EMPLOYEES, BUDGET_ITEMS, INVENTORY, ASSETS, PROCUREMENT_REQUESTS, TRAINING_COURSES, JOB_APPLICATIONS, CASH_ADVANCES, BANKS, MY_LEAVES, SHIFTS, MATERIAL_REQUESTS, ACCOUNTS, JOURNAL_ENTRIES, INVOICES, APP_VERSION, STOCK_ENTRIES } from './constants';
import { Ministry, User, Language, Account } from './types';

// --- COMPONENTS ---

// 1. LOGIN PAGE
interface LoginProps {
  onLogin: (ministry: Ministry, user: User) => void;
  lang: Language;
  setLang: (l: Language) => void;
}

const LoginPage: React.FC<LoginProps> = ({ onLogin, lang, setLang }) => {
  const [selectedMinistry, setSelectedMinistry] = useState<string>('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const t = TRANSLATIONS[lang];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMinistry) {
      setError(lang === 'en' ? 'Please select a ministry' : 'يرجى اختيار الوزارة');
      return;
    }
    if (username === 'demo' && password === 'demo') {
      const ministry = MINISTRIES.find(m => m.id === selectedMinistry);
      if (ministry) {
        onLogin(ministry, {
          id: 'u1',
          name: lang === 'en' ? 'System Administrator' : 'مدير النظام',
          role: 'Admin',
          ministryId: ministry.id,
          avatar: 'https://picsum.photos/id/64/200/200'
        });
      }
    } else {
      setError(lang === 'en' ? 'Invalid credentials' : 'بيانات الاعتماد غير صحيحة');
    }
  };

  return (
    <div className="flex min-h-screen bg-white font-sans" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Right Side (Green Background) - Visual Right in RTL (Start) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#004D40] relative overflow-hidden flex-col justify-between text-white order-1">
         {/* Background Image & Overlay */}
         <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596708681404-37f000cd9625?q=80&w=2673&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-br from-[#004D40]/90 via-[#004D40]/80 to-[#004D40]/60"></div>
         </div>

         {/* Header Logo Area */}
         <div className="relative z-10 p-12 flex justify-end items-start gap-4">
             <div className="text-right">
                 <h2 className="text-xl font-bold tracking-wider uppercase">REPUBLIC OF IRAQ</h2>
                 <p className="text-sm text-emerald-200 opacity-90">National Data Center</p>
             </div>
             <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1200px-Flag_of_Iraq.svg.png" className="w-8 h-auto opacity-90 shadow-sm" alt="Coat of Arms" />
             </div>
         </div>

         {/* Center Content */}
         <div className="relative z-10 px-12 pb-20 text-right">
             <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                نظام إدارة الموارد <br/> الحكومية الموحد
             </h1>
             <p className="text-lg md:text-xl text-emerald-100 max-w-2xl ml-auto leading-relaxed opacity-90">
                منصة مركزية رقمية لتعزيز الكفاءة والشفافية في المؤسسات الحكومية، مدعومة بأحدث تقنيات مركز البيانات الوطني.
             </p>
         </div>

         {/* Footer Version */}
         <div className="relative z-10 p-6 text-right text-xs text-emerald-400/60 font-mono border-t border-white/5">
             v1.0.0-Gold | Secured by INDC
         </div>
      </div>

      {/* Left Side (Form) - Visual Left in RTL (End) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gray-50/50 relative order-2">
         {/* Language Toggle */}
         <div className="absolute top-8 right-8 flex items-center">
             <button 
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-2 text-slate-500 hover:text-[#004D40] font-medium transition-colors px-4 py-2 rounded-full hover:bg-slate-100"
             >
                <span className="text-sm">{lang === 'en' ? 'العربية' : 'English'}</span>
                <Globe size={18} />
             </button>
         </div>

         {/* Login Card */}
         <div className="w-full max-w-[420px] px-6">
             <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-10 border border-slate-100">
                 {/* Card Header */}
                 <div className="text-center mb-10">
                     <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-slate-50 mb-6 group transition-all hover:bg-slate-100 p-5 border border-slate-100 shadow-inner">
                         <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coat_of_arms_of_Iraq.svg/640px-Coat_of_arms_of_Iraq.svg.png" 
                            alt="Iraq Coat of Arms" 
                            className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                         />
                     </div>
                     <h2 className="text-3xl font-bold text-slate-800 mb-3">{lang === 'ar' ? 'تسجيل الدخول' : 'Login'}</h2>
                     <p className="text-slate-500 text-sm">{lang === 'ar' ? 'مرحبا بكم في مركز البيانات الوطني العراقي' : 'Welcome to the Iraqi National Data Center'}</p>
                 </div>

                 {/* Form */}
                 <form onSubmit={handleLogin} className="space-y-6">
                     <div className="space-y-2">
                         <label className="text-sm font-semibold text-slate-700 block">{t.selectMinistry}</label>
                         <div className="relative">
                             <select 
                                value={selectedMinistry}
                                onChange={(e) => setSelectedMinistry(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent appearance-none transition-all cursor-pointer pl-12 rtl:pl-4 rtl:pr-12"
                             >
                                <option value="" disabled className="text-slate-400">{t.selectMinistry}</option>
                                {MINISTRIES.map(m => (
                                  <option key={m.id} value={m.id}>{lang === 'ar' ? m.nameAr : m.nameEn}</option>
                                ))}
                             </select>
                             <div className="absolute top-1/2 -translate-y-1/2 left-4 rtl:left-auto rtl:right-4 pointer-events-none text-slate-400">
                                <Building size={20} />
                             </div>
                             <div className="absolute top-1/2 -translate-y-1/2 right-4 rtl:right-auto rtl:left-4 pointer-events-none text-slate-400">
                                <ChevronDown size={18} />
                             </div>
                         </div>
                     </div>

                     <div className="space-y-2">
                         <label className="text-sm font-semibold text-slate-700 block">{t.username}</label>
                         <div className="relative">
                             <input 
                                type="text" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl pl-12 pr-4 rtl:pl-4 rtl:pr-12 py-3.5 outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent transition-all placeholder:text-slate-400"
                                placeholder="demo"
                             />
                             <div className="absolute top-1/2 -translate-y-1/2 left-4 rtl:left-auto rtl:right-4 text-slate-400 pointer-events-none">
                                 <UserIcon size={20} />
                             </div>
                         </div>
                     </div>

                     <div className="space-y-2">
                         <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-slate-700">{t.password}</label>
                            <a href="#" className="text-xs text-[#004D40] hover:underline"></a>
                         </div>
                         <div className="relative">
                             <input 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl pl-12 pr-4 rtl:pl-4 rtl:pr-12 py-3.5 outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent transition-all placeholder:text-slate-400"
                                placeholder="demo"
                             />
                             <div className="absolute top-1/2 -translate-y-1/2 left-4 rtl:left-auto rtl:right-4 text-slate-400 pointer-events-none">
                                 <Lock size={20} />
                             </div>
                         </div>
                     </div>

                     <button 
                        type="submit"
                        className="w-full bg-[#004D40] hover:bg-[#00382e] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-emerald-900/20 transform transition-all duration-200 active:scale-[0.98] mt-4"
                     >
                        {t.login}
                     </button>
                     
                     {error && (
                         <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm text-center font-medium animate-pulse">
                           {error}
                         </div>
                     )}
                 </form>

                 <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                     <p className="text-xs text-slate-400 mb-3">{t.demoHint}</p>
                     <div className="flex justify-center gap-2 items-center opacity-50 hover:opacity-100 transition-opacity">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1200px-Flag_of_Iraq.svg.png" alt="Iraq" className="h-4 w-6 shadow-sm rounded-[2px]" />
                        <span className="text-[10px] font-bold text-slate-400 tracking-widest">IRAQ</span>
                     </div>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

// 2. DASHBOARD WIDGETS
const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg ${color} text-white`}>
        <Icon size={20} />
      </div>
    </div>
    {trend && (
      <div className="mt-4 flex items-center text-sm">
        <span className="text-emerald-600 font-medium">+{trend}%</span>
        <span className="text-slate-400 mx-2">vs last month</span>
      </div>
    )}
  </div>
);

// --- SHARED COMPONENTS ---

const ShortcutCard = ({ title, icon: Icon, onClick, color = 'bg-emerald-600' }: any) => (
  <div onClick={onClick} className={`${color} hover:brightness-110 text-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer shadow-md transition-transform hover:-translate-y-1 h-40`}>
    <Icon size={40} className="opacity-90" />
    <span className="font-bold text-center">{title}</span>
  </div>
);

const SectionList = ({ title, items, lang, onItemClick, color = 'border-t-emerald-600' }: any) => (
  <div className={`bg-white rounded-xl shadow-sm border-t-4 ${color} p-4 h-full`}>
    <h3 className="font-bold text-slate-800 mb-4 text-center border-b pb-2">{title}</h3>
    <ul className="space-y-2">
      {items.map((item: string, idx: number) => (
        <li 
          key={idx} 
          onClick={() => onItemClick && onItemClick(item)}
          className={`flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 cursor-pointer p-1 hover:bg-slate-50 rounded ${onItemClick ? 'cursor-pointer' : ''}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${color.replace('border-t-', 'bg-')}`}></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// --- HR MODULE ---

const HRModule = ({ lang }: { lang: Language }) => {
  const t = TRANSLATIONS[lang];
  // Sub-navigation state
  const [activeSubTab, setActiveSubTab] = useState<'dashboard' | 'employees' | 'attendance' | 'payroll' | 'recruitment'>('dashboard');
  // View mode within sub-tabs (e.g. list, create form)
  const [viewMode, setViewMode] = useState<'list' | 'create_employee' | 'promotion' | 'insurance' | 'shift_types' | 'attendance_report' | 'holiday_list' | 'leave_request'>('list');

  // --- CONTENT DATA ---
  const shortcuts = [
    { title: lang === 'ar' ? 'الموظف' : 'Employee', icon: Users, action: () => { setActiveSubTab('employees'); setViewMode('list'); } },
    { title: lang === 'ar' ? 'طلب إجازة' : 'Leave Request', icon: FileText, action: () => setViewMode('leave_request') },
    { title: lang === 'ar' ? 'الحضور' : 'Attendance', icon: CheckCircle, action: () => { setActiveSubTab('attendance'); setViewMode('shift_types'); } },
    { title: lang === 'ar' ? 'قائمة الحضور الشهرية' : 'Monthly List', icon: Calendar, action: () => { setActiveSubTab('attendance'); setViewMode('attendance_report'); } },
    { title: lang === 'ar' ? 'طالب الوظيفة' : 'Job Applicant', icon: Briefcase, action: () => setActiveSubTab('recruitment') },
    { title: lang === 'ar' ? 'لوحة المعلومات' : 'Info Dashboard', icon: LayoutDashboard, action: () => {} },
  ];

  const payrollShortcuts = [
    { title: lang === 'ar' ? 'هيكل الراتب' : 'Payroll Structure', icon: BarChart },
    { title: lang === 'ar' ? 'كشف راتب' : 'Payroll Sheet', icon: FileText },
    { title: lang === 'ar' ? 'قسيمة الرواتب' : 'Payslip', icon: FileText },
    { title: lang === 'ar' ? 'تخصيص ضريبة الدخل' : 'Tax Allocation', icon: Wallet },
    { title: lang === 'ar' ? 'سجل الرواتب' : 'Payroll Record', icon: ClipboardList },
    { title: lang === 'ar' ? 'لوحة المعلومات' : 'Dashboard', icon: LayoutDashboard },
  ];

  // Lists
  const vacationItems = lang === 'ar' 
    ? ['قائمة العطل', 'نوع الاجازة', 'فترة الاجازة', 'سياسة الاجازة', 'تعيين سياسة الاجازات', 'طلب إجازة', 'تخصيص إجازة', 'الاجازات المدفوعة']
    : ['Holiday List', 'Leave Type', 'Leave Period', 'Leave Policy', 'Assign Policy', 'Leave Request', 'Leave Allocation', 'Paid Leaves'];
  
  const shiftItems = lang === 'ar'
    ? ['نوع المناوبة', 'طلب التغيير', 'تحديد المناوبة']
    : ['Shift Type', 'Change Request', 'Shift Assignment'];
    
  const empProcedures = lang === 'ar'
    ? ['اعداد الموظف', 'مهارات الموظف', 'ترقية الموظف', 'نقل الموظفين', 'نوع الشكوى', 'شكاوي الموظفين', 'فصل الموظف', 'استمارة تعيين موظف']
    : ['Employee Setup', 'Skills', 'Promotion', 'Transfer', 'Complaint Type', 'Complaints', 'Termination', 'Hiring Form'];

  const empMaster = lang === 'ar'
    ? ['الموظف', 'نوع الوظيفة', 'الافرع', 'الاقسام', 'التعيينات', 'درجة الموظف', 'مجموعة الموظفين', 'التأمين الصحي للموظف']
    : ['The Employee', 'Job Type', 'Branches', 'Departments', 'Appointments', 'Grade', 'Group', 'Health Insurance'];

  const handleVacationItemClick = (item: string) => {
    if (item === 'قائمة العطل' || item === 'Holiday List') {
      setViewMode('holiday_list');
    }
    if (item === 'طلب إجازة' || item === 'Leave Request') {
      setViewMode('leave_request');
    }
  };

  const renderEmployees = () => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
       <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">{t.employees}</h3>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-emerald-700">
                <UserPlus size={16} /> {lang === 'ar' ? 'موظف جديد' : 'New Employee'}
            </button>
       </div>
       <div className="overflow-x-auto">
           <table className="w-full text-left rtl:text-right">
               <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
                   <tr>
                       <th className="px-6 py-4">{t.code}</th>
                       <th className="px-6 py-4">{lang === 'ar' ? 'الاسم' : 'Name'}</th>
                       <th className="px-6 py-4">{lang === 'ar' ? 'القسم' : 'Department'}</th>
                       <th className="px-6 py-4">{lang === 'ar' ? 'المسمى الوظيفي' : 'Position'}</th>
                       <th className="px-6 py-4">{t.joinDate}</th>
                       <th className="px-6 py-4">{t.status}</th>
                   </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                   {EMPLOYEES.map((emp) => (
                       <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                           <td className="px-6 py-4 font-mono text-slate-500">{emp.code}</td>
                           <td className="px-6 py-4 font-medium flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
                                   {(lang === 'ar' ? emp.fullNameAr : emp.fullNameEn).charAt(0)}
                               </div>
                               {lang === 'ar' ? emp.fullNameAr : emp.fullNameEn}
                           </td>
                           <td className="px-6 py-4">{emp.department}</td>
                           <td className="px-6 py-4">{emp.position}</td>
                           <td className="px-6 py-4 text-sm text-slate-500">{emp.joinDate}</td>
                           <td className="px-6 py-4">
                               <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                   emp.status === 'Active' ? 'bg-green-100 text-green-700' : 
                                   emp.status === 'On Leave' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                               }`}>
                                   {emp.status}
                               </span>
                           </td>
                       </tr>
                   ))}
               </tbody>
           </table>
       </div>
    </div>
  );

  const renderAttendance = () => {
      const attendanceData = [
          { date: '2023-10-25', nameAr: 'أحمد البغدادي', nameEn: 'Ahmed Al-Baghdadi', checkIn: '08:02 AM', checkOut: '04:05 PM', status: 'Present' },
          { date: '2023-10-25', nameAr: 'فاطمة حسن', nameEn: 'Fatima Hassan', checkIn: '08:15 AM', checkOut: '04:00 PM', status: 'Late' },
          { date: '2023-10-25', nameAr: 'علي حسين', nameEn: 'Ali Hussein', checkIn: '-', checkOut: '-', status: 'Absent' },
          { date: '2023-10-25', nameAr: 'زينب محمد', nameEn: 'Zainab Mohammed', checkIn: '07:55 AM', checkOut: '04:10 PM', status: 'Present' },
          { date: '2023-10-25', nameAr: 'عمر فاروق', nameEn: 'Omar Farouk', checkIn: '08:00 AM', checkOut: '02:00 PM', status: 'Half Day' },
      ];

      return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">{t.attendance}</h3>
                <div className="flex gap-2">
                    <input type="date" className="border rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
            </div>
            <table className="w-full text-left rtl:text-right">
                <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
                    <tr>
                        <th className="px-6 py-4">{t.date}</th>
                        <th className="px-6 py-4">{lang === 'ar' ? 'الموظف' : 'Employee'}</th>
                        <th className="px-6 py-4">{lang === 'ar' ? 'وقت الحضور' : 'Check In'}</th>
                        <th className="px-6 py-4">{lang === 'ar' ? 'وقت الانصراف' : 'Check Out'}</th>
                        <th className="px-6 py-4">{t.status}</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {attendanceData.map((record, idx) => (
                        <tr key={idx}>
                            <td className="px-6 py-4 text-slate-500">{record.date}</td>
                            <td className="px-6 py-4 font-medium">{lang === 'ar' ? record.nameAr : record.nameEn}</td>
                            <td className="px-6 py-4 text-green-600">{record.checkIn}</td>
                            <td className="px-6 py-4 text-red-600">{record.checkOut}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    record.status === 'Present' ? 'bg-green-100 text-green-700' :
                                    record.status === 'Late' ? 'bg-yellow-100 text-yellow-700' :
                                    record.status === 'Absent' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                                }`}>{record.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
  };

  const renderPayroll = () => (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
           <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">{t.payroll} - Oct 2023</h3>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700">
                    {lang === 'ar' ? 'إصدار الرواتب' : 'Process Payroll'}
                </button>
            </div>
            <table className="w-full text-left rtl:text-right">
                <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
                    <tr>
                        <th className="px-6 py-4">{lang === 'ar' ? 'الموظف' : 'Employee'}</th>
                        <th className="px-6 py-4">{lang === 'ar' ? 'الراتب الأساسي' : 'Basic Salary'}</th>
                        <th className="px-6 py-4">{lang === 'ar' ? 'المخصصات' : 'Allowances'}</th>
                        <th className="px-6 py-4">{lang === 'ar' ? 'الاستقطاعات' : 'Deductions'}</th>
                        <th className="px-6 py-4">{lang === 'ar' ? 'الصافي' : 'Net Salary'}</th>
                        <th className="px-6 py-4">{t.status}</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {EMPLOYEES.map((emp) => {
                        const allowances = Math.round(emp.salary * 0.2); // Demo calculation
                        const deductions = Math.round(emp.salary * 0.05);
                        const net = emp.salary + allowances - deductions;
                        return (
                            <tr key={emp.id}>
                                <td className="px-6 py-4 font-medium">{lang === 'ar' ? emp.fullNameAr : emp.fullNameEn}</td>
                                <td className="px-6 py-4">{emp.salary.toLocaleString()} IQD</td>
                                <td className="px-6 py-4 text-green-600">+{allowances.toLocaleString()}</td>
                                <td className="px-6 py-4 text-red-600">-{deductions.toLocaleString()}</td>
                                <td className="px-6 py-4 font-bold">{net.toLocaleString()} IQD</td>
                                <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Paid</span></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
      </div>
  );

  const renderRecruitment = () => (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-800">{t.jobApplicant}</h3>
          </div>
          <table className="w-full text-left rtl:text-right">
                <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
                    <tr>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">{lang === 'ar' ? 'اسم المرشح' : 'Candidate Name'}</th>
                        <th className="px-6 py-4">{lang === 'ar' ? 'الوظيفة' : 'Position'}</th>
                        <th className="px-6 py-4">{t.date}</th>
                        <th className="px-6 py-4">{lang === 'ar' ? 'المرحلة' : 'Stage'}</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {JOB_APPLICATIONS.map((app) => (
                        <tr key={app.id}>
                            <td className="px-6 py-4 text-slate-500">{app.id}</td>
                            <td className="px-6 py-4 font-medium">{app.candidateName}</td>
                            <td className="px-6 py-4">{app.position}</td>
                            <td className="px-6 py-4">{app.date}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    app.stage === 'Hired' ? 'bg-green-100 text-green-700' :
                                    app.stage === 'Interview' ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-700'
                                }`}>
                                    {app.stage}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
          </table>
      </div>
  );

  const renderLeaveRequest = () => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
         <h3 className="text-xl font-bold text-slate-800">{t.requestLeave}</h3>
         <button onClick={() => setViewMode('list')} className="text-slate-500 hover:text-emerald-600"><ChevronRight size={24} /></button>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <div className="bg-amber-100 p-2 rounded-full text-amber-600 mt-1"><FileText size={18} /></div>
            <div>
                <h4 className="font-bold text-amber-800 text-sm">{lang === 'ar' ? 'سياسة الإجازات' : 'Leave Policy Reminder'}</h4>
                <p className="text-xs text-amber-700 mt-1">
                    {lang === 'ar' 
                        ? 'يرجى تقديم طلب الإجازة قبل 3 أيام على الأقل من تاريخ البدء. الإجازات المرضية تتطلب تقريراً طبياً.' 
                        : 'Please submit leave requests at least 3 days in advance. Sick leaves require a medical report.'}
                </p>
            </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setViewMode('list'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t.employee}</label>
                    <select className="w-full border rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-emerald-500 outline-none">
                        {EMPLOYEES.map(e => <option key={e.id} value={e.id}>{lang === 'ar' ? e.fullNameAr : e.fullNameEn}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{lang === 'ar' ? 'نوع الإجازة' : 'Leave Type'}</label>
                    <select className="w-full border rounded-lg p-2.5 bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                        <option value="Vacation">{lang === 'ar' ? 'إجازة اعتيادية' : 'Vacation'}</option>
                        <option value="Sick">{lang === 'ar' ? 'إجازة مرضية' : 'Sick'}</option>
                        <option value="Emergency">{lang === 'ar' ? 'إجازة طارئة' : 'Emergency'}</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{lang === 'ar' ? 'تاريخ البدء' : 'Start Date'}</label>
                    <input type="date" className="w-full border rounded-lg p-2.5 bg-white focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{lang === 'ar' ? 'عدد الأيام' : 'Number of Days'}</label>
                    <input type="number" min="1" defaultValue="1" className="w-full border rounded-lg p-2.5 bg-white focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
            </div>
            
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{lang === 'ar' ? 'السبب' : 'Reason'}</label>
                <textarea className="w-full border rounded-lg p-2.5 bg-white focus:ring-2 focus:ring-emerald-500 outline-none" rows={4} placeholder={lang === 'ar' ? 'يرجى ذكر سبب الإجازة...' : 'Please specify the reason for leave...'}></textarea>
            </div>

            <div className="pt-2 border-t mt-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">{t.status}</label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="status" defaultChecked className="text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Pending</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                        <input type="radio" name="status" disabled className="text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Approved</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                        <input type="radio" name="status" disabled className="text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Rejected</span>
                    </label>
                </div>
                <p className="text-xs text-slate-400 mt-1">{lang === 'ar' ? 'يتم تعيين الحالة افتراضياً إلى معلق' : 'Status defaults to Pending upon creation'}</p>
            </div>

            <div className="flex gap-3 pt-4">
                <button type="submit" className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 font-medium transition-colors shadow-lg shadow-emerald-900/10">
                    {t.save}
                </button>
                <button type="button" onClick={() => setViewMode('list')} className="bg-white border border-slate-300 text-slate-700 px-6 py-2.5 rounded-lg hover:bg-slate-50 font-medium transition-colors">
                    {t.cancel}
                </button>
            </div>
        </form>
      </div>
    </div>
  );

  const renderHolidayList = () => {
    const holidays = [
        { date: '2023-01-01', nameAr: 'رأس السنة الميلادية', nameEn: 'New Year\'s Day' },
        { date: '2023-01-06', nameAr: 'عيد الجيش العراقي', nameEn: 'Army Day' },
        { date: '2023-03-21', nameAr: 'عيد نوروز', nameEn: 'Nowruz' },
        { date: '2023-04-22', nameAr: 'عيد الفطر المبارك', nameEn: 'Eid al-Fitr' },
        { date: '2023-05-01', nameAr: 'عيد العمال', nameEn: 'Labour Day' },
        { date: '2023-06-29', nameAr: 'عيد الأضحى المبارك', nameEn: 'Eid al-Adha' },
        { date: '2023-07-14', nameAr: 'تأسيس الجمهورية', nameEn: 'Republic Day' },
        { date: '2023-07-19', nameAr: 'رأس السنة الهجرية', nameEn: 'Islamic New Year' },
        { date: '2023-07-28', nameAr: 'يوم عاشوراء', nameEn: 'Ashura' },
        { date: '2023-09-27', nameAr: 'المولد النبوي الشريف', nameEn: 'Prophet\'s Birthday' },
        { date: '2023-10-03', nameAr: 'العيد الوطني العراقي', nameEn: 'Iraqi National Day' },
        { date: '2023-12-25', nameAr: 'عيد الميلاد المجيد', nameEn: 'Christmas Day' },
    ];
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 animate-fade-in" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <div className="flex justify-between items-start mb-6 border-b pb-4">
                <h3 className="text-2xl font-bold text-slate-800">{lang === 'ar' ? 'العطلات الرسمية في العراق' : 'Public Holidays in Iraq'}</h3>
                <button onClick={() => setViewMode('list')}><X size={24} className="text-slate-400 hover:text-red-500 transition-colors" /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {holidays.map((h, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                        <div className="bg-emerald-100 text-emerald-600 p-3 rounded-lg font-bold text-center min-w-[60px]">
                            <div className="text-sm">{h.date.split('-')[1]}</div>
                            <div className="text-lg">{h.date.split('-')[2]}</div>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800">{lang === 'ar' ? h.nameAr : h.nameEn}</h4>
                            <p className="text-xs text-slate-500">{h.date.split('-')[0]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  };

  const renderDashboard = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {shortcuts.map((s, i) => (
          <ShortcutCard key={i} title={s.title} icon={s.icon} onClick={s.action} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SectionList title={t.vacations} items={vacationItems} onItemClick={handleVacationItemClick} />
        <SectionList title={t.shiftManagement} items={shiftItems} />
        <SectionList title={t.employeeProcedures} items={empProcedures} />
        <SectionList title={t.theEmployee} items={empMaster} />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {[
            {id: 'dashboard', label: t.dashboard},
            {id: 'employees', label: t.employees},
            {id: 'attendance', label: t.attendance},
            {id: 'payroll', label: t.payroll},
            {id: 'recruitment', label: t.recruitment},
        ].map(tab => (
            <button 
               key={tab.id}
               onClick={() => { setActiveSubTab(tab.id as any); setViewMode('list'); }}
               className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${activeSubTab === tab.id ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}>{tab.label}
            </button>
        ))}
      </div>
      {activeSubTab === 'dashboard' && viewMode === 'list' && renderDashboard()}
      {activeSubTab === 'dashboard' && viewMode === 'leave_request' && renderLeaveRequest()}
      {activeSubTab === 'dashboard' && viewMode === 'holiday_list' && renderHolidayList()}
      {activeSubTab === 'employees' && renderEmployees()}
      {activeSubTab === 'attendance' && renderAttendance()}
      {activeSubTab === 'payroll' && renderPayroll()}
      {activeSubTab === 'recruitment' && renderRecruitment()}
    </div>
  );
};

// --- SCM MODULE ---
const SCMModule = ({ lang, user }: { lang: Language; user: User | null }) => {
  const t = TRANSLATIONS[lang];
  const [activeView, setActiveView] = useState<'dashboard' | 'items' | 'item_create' | 'requests' | 'request_create' | 'entries' | 'entry_create' | 'analytics' | 'warehouse_create'>('dashboard');
  
  // Shortcuts with Orange/Brown Theme
  const shortcuts = [
    { title: t.infoDashboard, icon: LayoutDashboard, action: () => setActiveView('dashboard') },
    { title: t.stockLedger, icon: FileBox, action: () => setActiveView('analytics') },
    { title: t.purchaseReceipt, icon: ShoppingCart, action: () => setActiveView('entries') },
    { title: t.stockEntry, icon: ClipboardList, action: () => setActiveView('entries') },
    { title: t.materialRequest, icon: FileText, action: () => setActiveView('requests') },
    { title: t.items, icon: Box, action: () => setActiveView('items') },
  ];

  // Lists for Dashboard Columns
  const settingsList = [t.warehouseSettings, t.warehouse, t.uom, t.itemAttribute, t.brand, t.itemSpecs, t.uomConversion];
  const reportsList = [t.stockLedger, t.stockBalance, t.projectedQty, t.financialSummary, t.historicClassification, t.stockItemPrice];
  const entriesList = [t.materialRequest, t.stockEntry, t.deliveryNote, t.purchaseReceipt, t.pickList, t.deliveryRoute];
  const commoditiesList = [t.items, t.itemGroup, t.productBundle, t.priceList, t.stockItemPrice, t.shippingRules, t.pricingRule, t.itemAlternative, t.manufacturer];

  const handleListClick = (item: string) => {
    if (item === t.warehouse) setActiveView('warehouse_create');
    if (item === t.materialRequest) setActiveView('requests');
    if (item === t.stockEntry) setActiveView('entries');
    if (item === t.items) setActiveView('items');
    if (item === t.purchaseAnalytics) setActiveView('analytics');
    if (item === t.stockLedger) setActiveView('analytics'); // Reuse analytics for demo
  };

  const renderDashboard = () => (
     <div className="space-y-8 animate-fade-in">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {shortcuts.map((s, i) => <ShortcutCard key={i} title={s.title} icon={s.icon} onClick={s.action} color="bg-[#c25e00]" />)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <SectionList title={t.commodities} items={commoditiesList} onItemClick={handleListClick} color="border-t-[#c25e00]" />
           <SectionList title={t.stockEntries} items={entriesList} onItemClick={handleListClick} color="border-t-[#c25e00]" />
           <SectionList title={t.stockReports} items={reportsList} onItemClick={handleListClick} color="border-t-[#c25e00]" />
           <SectionList title={t.scmSettings} items={settingsList} onItemClick={handleListClick} color="border-t-[#c25e00]" />
        </div>

        <div className="pt-4 border-t border-slate-200 text-slate-500 text-sm flex gap-4">
             <button onClick={() => setActiveView('analytics')} className="flex items-center gap-2 hover:text-[#c25e00] font-medium"><BarChart2 size={16} /> {t.purchaseAnalytics}</button>
             <button onClick={() => setActiveView('warehouse_create')} className="flex items-center gap-2 hover:text-[#c25e00] font-medium"><Home size={16} /> {t.newWarehouseTitle}</button>
        </div>
     </div>
  );

  const renderItems = () => {
    if (activeView === 'item_create') {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 animate-fade-in">
                <div className="flex justify-between items-center p-6 border-b">
                    <h3 className="text-xl font-bold text-slate-800">{t.newItem}</h3>
                    <div className="flex gap-2">
                        <button className="bg-[#c25e00] text-white px-4 py-2 rounded text-sm hover:bg-[#a04d00]">{t.add}</button>
                        <button onClick={() => setActiveView('items')} className="bg-[#c25e00] text-white px-2 py-2 rounded text-sm hover:bg-[#a04d00]"><List size={20} /></button>
                    </div>
                </div>
                <div className="p-8 bg-slate-50/50">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 max-w-4xl mx-auto space-y-6">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h4 className="font-bold text-slate-700">{t.items}</h4>
                            <X className="cursor-pointer text-slate-400 hover:text-red-500" onClick={() => setActiveView('items')} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                               <label className="block text-sm text-slate-600 mb-1">{t.itemCode}</label>
                               <input type="text" className="w-full border-b border-slate-300 focus:border-[#c25e00] outline-none py-1 bg-transparent" />
                           </div>
                           <div>
                               <label className="block text-sm text-slate-600 mb-1">{t.itemName}</label>
                               <input type="text" className="w-full border-b border-slate-300 focus:border-[#c25e00] outline-none py-1 bg-slate-100" disabled />
                           </div>
                           <div>
                               <label className="block text-sm text-slate-600 mb-1">{t.itemNameAr}</label>
                               <input type="text" className="w-full border-b border-slate-300 focus:border-[#c25e00] outline-none py-1 bg-transparent" />
                           </div>
                           <div>
                               <label className="block text-sm text-slate-600 mb-1">{t.uom}</label>
                               <div className="relative">
                                  <input type="text" className="w-full border-b border-slate-300 focus:border-[#c25e00] outline-none py-1 bg-slate-100" />
                                  <ChevronDown size={14} className="absolute top-2 end-0 text-slate-400" />
                               </div>
                           </div>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                            <input type="checkbox" id="maintainStock" className="w-4 h-4 text-[#c25e00]" />
                            <label htmlFor="maintainStock" className="text-sm text-slate-600">{t.maintainStock}</label>
                        </div>
                        
                        <div className="pt-4 border-t flex justify-end gap-2">
                             <button onClick={() => setActiveView('items')} className="px-6 py-2 border border-[#c25e00] text-[#c25e00] rounded hover:bg-orange-50">{t.cancel}</button>
                             <button className="px-6 py-2 bg-[#c25e00] text-white rounded hover:bg-[#a04d00]">{t.add}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">{t.items}</h3>
                <button onClick={() => setActiveView('item_create')} className="bg-[#c25e00] text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-[#a04d00]">{t.add}</button>
            </div>
            <table className="w-full text-left rtl:text-right">
                <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
                    <tr><th className="px-6 py-4">{t.itemCode}</th><th className="px-6 py-4">{lang === 'en' ? 'Name' : 'الاسم'}</th><th className="px-6 py-4">{t.warehouse}</th><th className="px-6 py-4">{t.quantity}</th><th className="px-6 py-4">{t.status}</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {INVENTORY.map(item => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 font-mono text-slate-500">{item.sku}</td>
                            <td className="px-6 py-4 font-medium">{lang === 'ar' ? item.nameAr : item.nameEn}</td>
                            <td className="px-6 py-4">{item.warehouse}</td>
                            <td className="px-6 py-4 font-bold">{item.quantity} {item.unit}</td>
                            <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{item.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
  };

  const renderMaterialRequests = () => {
      if (activeView === 'request_create') {
          return (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 animate-fade-in">
                  <div className="flex justify-between items-center p-6 border-b">
                     <h3 className="text-xl font-bold text-slate-800">{t.materialRequest}</h3>
                     <div className="flex gap-2">
                        <button className="bg-[#c25e00] text-white px-4 py-2 rounded text-sm hover:bg-[#a04d00]">{t.save}</button>
                        <button onClick={() => setActiveView('requests')} className="bg-[#c25e00] text-white px-2 py-2 rounded text-sm hover:bg-[#a04d00]"><List size={20} /></button>
                     </div>
                  </div>
                  
                  <div className="p-8 bg-slate-50/50">
                     <div className="bg-white border border-[#c25e00] rounded-lg p-6 max-w-5xl mx-auto mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                            <div><label className="block text-sm text-slate-600 mb-1">{t.user}</label><div className="bg-slate-100 p-2 rounded border">{user?.name || "Ahmed Al-Baghdadi"}</div></div>
                            <div><label className="block text-sm text-slate-600 mb-1">{t.date}</label><div className="bg-slate-100 p-2 rounded border flex justify-between"><span>06/06/2022</span><Calendar size={16} className="text-slate-400"/></div></div>
                            <div><label className="block text-sm text-slate-600 mb-1">{t.purpose}</label><div className="bg-slate-100 p-2 rounded border flex justify-between"><span>Purchase</span><ChevronDown size={16} className="text-slate-400"/></div></div>
                            <div><label className="block text-sm text-slate-600 mb-1">{t.requiredDate}</label><div className="bg-slate-100 p-2 rounded border flex justify-between"><span>Purchase</span><ChevronDown size={16} className="text-slate-400"/></div></div>
                        </div>
                     </div>

                     <div className="bg-white border border-[#c25e00] rounded-lg p-6 max-w-5xl mx-auto mb-6">
                         <div className="mb-4">
                             <label className="block text-sm font-bold text-slate-700 mb-2">{t.warehouse}</label>
                             <div className="bg-slate-100 p-3 rounded border flex justify-between items-center text-slate-500">
                                 <span>{t.sourceWarehouse}</span>
                                 <ChevronDown size={16} />
                             </div>
                         </div>
                     </div>

                     <div className="bg-white border border-[#c25e00] rounded-lg p-6 max-w-5xl mx-auto">
                        <h4 className="font-bold text-slate-800 mb-4">{t.items}</h4>
                        <div className="border rounded overflow-hidden">
                           <table className="w-full text-sm text-slate-700">
                               <thead className="bg-slate-50 border-b">
                                   <tr>
                                       <th className="p-3 border-r w-10 text-center">#</th>
                                       <th className="p-3 border-r">{t.itemCode}</th>
                                       <th className="p-3 border-r">{t.requiredDate}</th>
                                       <th className="p-3 border-r">{t.quantity}</th>
                                       <th className="p-3 border-r">{t.targetWarehouse}</th>
                                       <th className="p-3 border-r">{t.uom}</th>
                                       <th className="p-3 text-center">{t.actions}</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                       <td className="p-3 border-r text-center">1</td>
                                       <td className="p-3 border-r"></td>
                                       <td className="p-3 border-r"></td>
                                       <td className="p-3 border-r text-center">.</td>
                                       <td className="p-3 border-r"></td>
                                       <td className="p-3 border-r"></td>
                                       <td className="p-3 text-center"><CheckCircle size={16} className="inline text-[#c25e00]" /></td>
                                   </tr>
                               </tbody>
                           </table>
                           <div className="p-2 flex gap-2 border-t bg-slate-50">
                                <button className="bg-[#c25e00] text-white px-4 py-1.5 rounded text-xs hover:bg-[#a04d00]">{t.addLine}</button>
                                <button className="bg-[#c25e00] text-white px-4 py-1.5 rounded text-xs hover:bg-[#a04d00]">{t.add} {t.items}</button>
                           </div>
                        </div>
                     </div>
                  </div>
              </div>
          );
      }
      return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">{t.materialRequest}</h3>
                <button onClick={() => setActiveView('request_create')} className="bg-[#c25e00] text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-[#a04d00]">{t.add}</button>
            </div>
            <table className="w-full text-left rtl:text-right">
                <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
                    <tr><th className="px-6 py-4">ID</th><th className="px-6 py-4">{t.date}</th><th className="px-6 py-4">{t.user}</th><th className="px-6 py-4">{t.purpose}</th><th className="px-6 py-4">{t.status}</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {MATERIAL_REQUESTS.map(req => (
                        <tr key={req.id}>
                            <td className="px-6 py-4 font-mono text-slate-500">{req.id}</td>
                            <td className="px-6 py-4">{req.date}</td>
                            <td className="px-6 py-4">{req.user}</td>
                            <td className="px-6 py-4">{req.purpose}</td>
                            <td className="px-6 py-4"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">{req.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
  };

  const renderStockEntries = () => {
      if (activeView === 'entry_create') {
          return (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 animate-fade-in">
                  <div className="flex justify-between items-center p-6 border-b">
                      <h3 className="text-xl font-bold text-slate-800">{t.stockEntry}</h3>
                      <div className="flex gap-2">
                        <button className="bg-[#c25e00] text-white px-4 py-2 rounded text-sm hover:bg-[#a04d00]">{t.save}</button>
                        <button onClick={() => setActiveView('entries')} className="bg-[#c25e00] text-white px-2 py-2 rounded text-sm hover:bg-[#a04d00]"><List size={20} /></button>
                     </div>
                  </div>
                  <div className="p-8 bg-slate-50/50">
                     <div className="bg-white border border-[#c25e00] rounded-lg p-6 max-w-5xl mx-auto mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                             <div><label className="block text-sm text-slate-600 mb-1">{t.user}</label><div className="bg-slate-100 p-2 rounded border">{user?.name || "Ahmed Al-Baghdadi"}</div></div>
                             <div><label className="block text-sm text-slate-600 mb-1">{t.date}</label><div className="bg-slate-100 p-2 rounded border flex justify-between"><span>06/06/2022</span><Calendar size={16} className="text-slate-400"/></div></div>
                             <div><label className="block text-sm text-slate-600 mb-1">{t.entryType}</label><div className="bg-slate-100 p-2 rounded border flex justify-between"><span>Material Receipt</span><ChevronDown size={16} className="text-slate-400"/></div></div>
                             <div><label className="block text-sm text-slate-600 mb-1">{t.startTime}</label><div className="bg-slate-100 p-2 rounded border flex justify-between"><span>10:00</span><Clock size={16} className="text-slate-400"/></div></div>
                        </div>
                     </div>
                     
                     <div className="bg-white border border-[#c25e00] rounded-lg p-6 max-w-5xl mx-auto mb-6">
                         <div className="mb-4">
                             <label className="block text-sm font-bold text-slate-700 mb-2">{t.warehouse}</label>
                             <div className="bg-slate-100 p-3 rounded border flex justify-between items-center text-slate-500">
                                 <span>{t.sourceWarehouse}</span>
                                 <ChevronDown size={16} />
                             </div>
                         </div>
                     </div>

                     <div className="bg-white border border-[#c25e00] rounded-lg p-6 max-w-5xl mx-auto">
                        <h4 className="font-bold text-slate-800 mb-4">{t.items}</h4>
                        <div className="border rounded overflow-hidden">
                           <table className="w-full text-sm text-slate-700">
                               <thead className="bg-slate-50 border-b">
                                   <tr>
                                       <th className="p-3 border-r w-10 text-center">#</th>
                                       <th className="p-3 border-r">{t.sourceWarehouse}</th>
                                       <th className="p-3 border-r">{t.targetWarehouse}</th>
                                       <th className="p-3 border-r">{t.itemCode}</th>
                                       <th className="p-3 border-r">{t.quantity}</th>
                                       <th className="p-3 border-r">{t.priceList}</th>
                                       <th className="p-3 text-center">{t.actions}</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                       <td className="p-3 border-r text-center">1</td>
                                       <td className="p-3 border-r"></td>
                                       <td className="p-3 border-r"></td>
                                       <td className="p-3 border-r"></td>
                                       <td className="p-3 border-r text-center">.</td>
                                       <td className="p-3 border-r"></td>
                                       <td className="p-3 text-center"><CheckCircle size={16} className="inline text-[#c25e00]" /></td>
                                   </tr>
                               </tbody>
                           </table>
                           <div className="p-2 flex gap-2 border-t bg-slate-50">
                                <button className="bg-[#c25e00] text-white px-4 py-1.5 rounded text-xs hover:bg-[#a04d00]">{t.addLine}</button>
                                <button className="bg-[#c25e00] text-white px-4 py-1.5 rounded text-xs hover:bg-[#a04d00]">{t.add} {t.items}</button>
                           </div>
                        </div>
                     </div>
                  </div>
              </div>
          )
      }
      return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">{t.stockEntries}</h3>
                <button onClick={() => setActiveView('entry_create')} className="bg-[#c25e00] text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-[#a04d00]">{t.add}</button>
            </div>
            <table className="w-full text-left rtl:text-right">
                <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
                    <tr><th className="px-6 py-4">ID</th><th className="px-6 py-4">{t.date}</th><th className="px-6 py-4">{t.entryType}</th><th className="px-6 py-4">{t.status}</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {STOCK_ENTRIES.map(entry => (
                        <tr key={entry.id}>
                            <td className="px-6 py-4 font-mono text-slate-500">{entry.id}</td>
                            <td className="px-6 py-4">{entry.date}</td>
                            <td className="px-6 py-4">{entry.type}</td>
                            <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{entry.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
  };

  const renderAnalytics = () => {
      // Empty placeholder data for visual match
      return (
          <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                  <div className="flex justify-between items-center p-6 border-b">
                      <h3 className="font-bold text-slate-800">{t.purchaseAnalytics}</h3>
                      <div className="flex gap-2">
                        <button onClick={() => setActiveView('dashboard')} className="bg-[#c25e00] text-white px-2 py-2 rounded text-sm hover:bg-[#a04d00]"><List size={20} /></button>
                         <button className="bg-[#c25e00] text-white px-4 py-2 rounded text-sm hover:bg-[#a04d00] flex gap-2 items-center"><PieChartIcon size={16}/> {lang === 'ar' ? 'رسم بياني' : 'Chart'}</button>
                     </div>
                  </div>
                  
                  <div className="p-6">
                      <div className="flex flex-wrap gap-4 mb-8 bg-slate-50 p-4 rounded-lg border">
                           <div className="flex-1 min-w-[200px] flex items-center justify-between bg-slate-100 border p-2 rounded text-slate-500"><span>{t.company}</span><ChevronDown size={14} /></div>
                           <div className="flex-1 min-w-[200px] flex items-center justify-between bg-slate-100 border p-2 rounded text-slate-500"><span>{t.itemGroup}</span><ChevronDown size={14} /></div>
                           <div className="flex-1 min-w-[200px] flex items-center justify-between bg-slate-100 border p-2 rounded text-slate-500"><span>{t.items}</span><ChevronDown size={14} /></div>
                           <div className="flex-1 min-w-[200px] flex items-center justify-between bg-slate-100 border p-2 rounded text-slate-500"><span>{t.warehouse}</span><ChevronDown size={14} /></div>
                           
                           <div className="flex items-center gap-2">
                               <input type="checkbox" id="long" className="w-4 h-4" />
                               <label htmlFor="long" className="text-sm">{t.financialStatements} (Long)</label>
                           </div>
                            <div className="flex items-center gap-2">
                               <input type="checkbox" id="var" className="w-4 h-4" />
                               <label htmlFor="var" className="text-sm">{t.itemAttribute}</label>
                           </div>
                      </div>
                      
                      <div className="h-96 flex items-center justify-center text-slate-400 flex-col gap-4">
                          <FileText size={64} className="opacity-20" />
                          <p>{lang === 'ar' ? 'لا شيء للاظهار' : 'Nothing to show'}</p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  const renderWarehouseCreate = () => (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 animate-fade-in max-w-4xl mx-auto">
          <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-slate-800">{t.newWarehouseTitle}</h3>
              <div className="flex gap-2">
                 <button className="bg-[#c25e00] text-white px-4 py-2 rounded text-sm hover:bg-[#a04d00]">{t.add}</button>
                 <button onClick={() => setActiveView('dashboard')} className="bg-[#c25e00] text-white px-2 py-2 rounded text-sm hover:bg-[#a04d00]"><List size={20} /></button>
              </div>
          </div>
          <div className="p-8 bg-slate-50/50">
             <div className="bg-white border border-[#c25e00] rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1">{t.warehouseName}</label>
                      <input type="text" className="w-full border-b border-slate-300 focus:border-[#c25e00] outline-none py-2 bg-transparent" />
                  </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1">{t.parentCompany}</label>
                      <input type="text" className="w-full border-b border-slate-300 focus:border-[#c25e00] outline-none py-2 bg-slate-100" defaultValue="Taqadum Iraq Co." />
                  </div>
                  <div className="col-span-2">
                      <div className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 text-[#c25e00]" id="isGroup" />
                          <label htmlFor="isGroup" className="text-sm font-medium text-slate-600">{t.isGroup}</label>
                      </div>
                  </div>
                </div>
             </div>

             <div className="bg-white border border-[#c25e00] rounded-lg p-6">
                 <div className="flex justify-between items-center cursor-pointer">
                    <span className="font-medium text-slate-700">{t.accountsPayable}</span>
                    <ChevronDown size={16} />
                 </div>
             </div>
          </div>
          <div className="p-4 border-t flex justify-end">
              <button onClick={() => setActiveView('dashboard')} className="px-6 py-2 border border-[#c25e00] text-[#c25e00] rounded hover:bg-orange-50">{t.cancel}</button>
          </div>
      </div>
  );

  return (
    <div className="space-y-6">
       {/* Breadcrumb-ish Navigation within Module */}
       {activeView !== 'dashboard' && (
           <button onClick={() => setActiveView('dashboard')} className="flex items-center gap-2 text-slate-500 hover:text-[#c25e00] mb-2">
               {lang === 'ar' ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
               <span className="text-sm font-medium">{t.dashboard}</span>
           </button>
       )}
       
       {activeView === 'dashboard' && renderDashboard()}
       {activeView === 'items' && renderItems()}
       {activeView === 'item_create' && renderItems()}
       {activeView === 'requests' && renderMaterialRequests()}
       {activeView === 'request_create' && renderMaterialRequests()}
       {activeView === 'entries' && renderStockEntries()}
       {activeView === 'entry_create' && renderStockEntries()}
       {activeView === 'analytics' && renderAnalytics()}
       {activeView === 'warehouse_create' && renderWarehouseCreate()}
    </div>
  );
};

// --- FINANCE MODULE ---
const FinanceModule = ({ lang }: { lang: Language }) => {
  const t = TRANSLATIONS[lang];
  const [activeView, setActiveView] = useState<'dashboard' | 'journal_entry' | 'sales_invoice' | 'purchase_invoice' | 'ledger' | 'chart_of_accounts'>('dashboard');
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);

  const shortcuts = [
    { title: t.infoDashboard, icon: LayoutDashboard, action: () => setActiveView('dashboard') },
    { title: t.generalLedger, icon: BookOpen, action: () => setActiveView('ledger') },
    { title: t.journalEntry, icon: FileText, action: () => setActiveView('journal_entry') },
    { title: t.purchaseInvoice, icon: Receipt, action: () => setActiveView('purchase_invoice') },
    { title: t.salesInvoice, icon: FileText, action: () => setActiveView('sales_invoice') },
    { title: t.chartOfAccounts, icon: Layers, action: () => setActiveView('chart_of_accounts') },
  ];

  const mainAccountsList = [t.company, t.chartOfAccounts, t.accountSettings, t.fiscalYear, t.accountingDimension, t.financeBook, t.accountingPeriod, t.paymentTerm];
  const ledgerList = [t.journalEntry, t.journalEntryTemplate, t.generalLedger, t.generalLedgerSummary];
  const arList = [t.salesInvoice, t.customer, t.paymentEntry, t.paymentRequest, t.accountsReceivable, t.accountsReceivableSummary, t.salesRegister, t.salesOrderAnalysis];
  const apList = [t.purchaseInvoice, t.supplier, t.paymentEntry, t.purchaseRegister, t.purchaseOrderAnalysis, t.items, t.accountsPayableSummary];
  const profitabilityList = [t.grossProfit, t.profitabilityAnalysis, t.salesTrends];
  const settingsList = [t.paymentAccounts, t.paymentTerms, t.paymentGateway];
  const currencyList = [t.currency, t.exchangeRate, t.exchangeRateRevaluation];
  const statementsList = [t.balanceSheet, t.profitLoss, t.cashFlow, t.trialBalance];

  const renderDashboard = () => (
    <div className="space-y-8 animate-fade-in">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {shortcuts.map((s, i) => <ShortcutCard key={i} title={s.title} icon={s.icon} onClick={s.action} color="bg-emerald-700" />)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SectionList title={t.mainAccounts} items={mainAccountsList} color="border-t-emerald-700" />
            <SectionList title={t.ledger} items={ledgerList} color="border-t-emerald-700" />
            <SectionList title={t.accountsReceivable} items={arList} color="border-t-emerald-700" />
            <SectionList title={t.accountsPayable} items={apList} color="border-t-emerald-700" />
            <SectionList title={t.profitability} items={profitabilityList} color="border-t-emerald-700" />
            <SectionList title={t.settings} items={settingsList} color="border-t-emerald-700" />
            <SectionList title={t.multiCurrency} items={currencyList} color="border-t-emerald-700" />
            <SectionList title={t.financialStatements} items={statementsList} color="border-t-emerald-700" />
        </div>
    </div>
  );

  const renderChartOfAccounts = () => {
      // Helper to render tree nodes recursively
      const renderNode = (account: Account, level: number = 0) => (
          <div key={account.id} className="relative">
              <div className="flex justify-between items-center py-3 border-b border-slate-50 hover:bg-slate-50 transition-colors group">
                  {/* Tree Node Column (Start - Left in LTR, Right in RTL) */}
                  <div className="flex items-center gap-3 ps-4" style={{ [lang === 'ar' ? 'paddingRight' : 'paddingLeft']: `${level * 24 + 16}px` }}>
                      <span className="font-bold text-slate-700 text-base">{lang === 'ar' ? account.nameAr : account.nameEn}</span>
                      <div className={`w-3 h-3 rounded-full bg-emerald-600 shadow-sm relative z-10`}></div>
                  </div>

                  {/* Values Column (End - Right in LTR, Left in RTL) */}
                  <div className="flex gap-8 text-sm text-slate-500 font-mono pe-4">
                      <span>{lang === 'ar' ? 'دائن: ٠ د.ع' : 'Credit: 0 IQD'}</span>
                      <span>{lang === 'ar' ? 'مدين: ٠ د.ع' : 'Debit: 0 IQD'}</span>
                  </div>
              </div>
              
              {/* Children */}
              {account.children && account.children.length > 0 && (
                  <div className="relative">
                      {/* Vertical line connecting children */}
                      <div className="absolute top-0 bottom-0 border-r-2 border-emerald-100" style={{ [lang === 'ar' ? 'right' : 'left']: `${level * 24 + 21}px` }}></div>
                      {account.children.map(child => renderNode(child, level + 1))}
                  </div>
              )}
          </div>
      );

      return (
          <div className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center text-emerald-800 mb-2">
                  <div className="bg-emerald-700 p-2 rounded text-white"><MoreHorizontal size={20} /></div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                      {t.chartOfAccountsTitle} <Menu size={24} />
                  </h3>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-emerald-200 overflow-hidden">
                  {/* Header Bar */}
                  <div className="bg-emerald-700 px-4 py-3 flex justify-between items-center text-white">
                      <div className="flex gap-2">
                          <button onClick={() => setShowAddAccountModal(true)} className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                              {t.addAccount}
                          </button>
                          <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                              {t.editAccount}
                          </button>
                          <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                              {t.accountStatement}
                          </button>
                      </div>
                      <span className="font-bold">{t.chartOfAccountsTitle}</span>
                  </div>

                  {/* Tree Content */}
                  <div className="bg-white min-h-[500px]">
                      {ACCOUNTS.map(account => renderNode(account))}
                  </div>
              </div>

              {/* Add Account Modal */}
              {showAddAccountModal && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden animate-fade-in" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                          <div className="bg-emerald-700 px-6 py-4 flex justify-between items-center text-white">
                              <h3 className="font-bold text-lg">{t.addAccount}</h3>
                              <button onClick={() => setShowAddAccountModal(false)} className="hover:text-emerald-200"><X size={20} /></button>
                          </div>
                          <div className="p-6 space-y-4">
                              <div>
                                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.account} (Arabic)</label>
                                  <input type="text" className="w-full border rounded p-2 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="اسم الحساب" />
                              </div>
                              <div>
                                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.account} (English)</label>
                                  <input type="text" className="w-full border rounded p-2 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Account Name" />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                  <div>
                                      <label className="block text-sm font-medium text-slate-700 mb-1">{t.code}</label>
                                      <input type="text" className="w-full border rounded p-2 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Code" />
                                  </div>
                                  <div>
                                      <label className="block text-sm font-medium text-slate-700 mb-1">{t.accountSettings}</label>
                                      <select className="w-full border rounded p-2 focus:ring-2 focus:ring-emerald-500 outline-none">
                                          <option>Asset</option>
                                          <option>Liability</option>
                                          <option>Equity</option>
                                          <option>Income</option>
                                          <option>Expense</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="flex items-center gap-2 pt-2">
                                  <input type="checkbox" id="isGroup" className="w-4 h-4 text-emerald-600 rounded" />
                                  <label htmlFor="isGroup" className="text-sm text-slate-700">Is Group</label>
                              </div>
                          </div>
                          <div className="bg-slate-50 px-6 py-4 flex justify-end gap-3 border-t">
                              <button onClick={() => setShowAddAccountModal(false)} className="px-4 py-2 border rounded text-slate-600 hover:bg-slate-100">{t.cancel}</button>
                              <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">{t.save}</button>
                          </div>
                      </div>
                  </div>
              )}
          </div>
      );
  };

  const renderJournalEntryForm = () => (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 animate-fade-in">
          <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-slate-800">{t.journalEntry}</h3>
              <div className="flex gap-2">
                  <button className="bg-emerald-700 text-white px-4 py-2 rounded text-sm hover:bg-emerald-800">{t.save}</button>
                  <button onClick={() => setActiveView('dashboard')} className="bg-emerald-700 text-white px-2 py-2 rounded text-sm hover:bg-emerald-800"><X size={20} /></button>
              </div>
          </div>
          <div className="p-8 bg-slate-50/50">
              <div className="bg-white border border-emerald-700 rounded-lg p-6 max-w-5xl mx-auto mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      <div><label className="block text-sm text-slate-600 mb-1">{t.entryType}</label><div className="bg-slate-100 p-2 rounded border">Journal Entry</div></div>
                      <div><label className="block text-sm text-slate-600 mb-1">{t.postingDate}</label><input type="date" className="w-full bg-white p-2 rounded border" /></div>
                      <div><label className="block text-sm text-slate-600 mb-1">{t.referenceNumber}</label><input type="text" className="w-full bg-white p-2 rounded border" /></div>
                  </div>
              </div>
              <div className="bg-white border border-emerald-700 rounded-lg p-6 max-w-5xl mx-auto">
                  <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b">
                          <tr>
                              <th className="p-3 text-start">{t.account}</th>
                              <th className="p-3 text-start">{t.party}</th>
                              <th className="p-3 text-start">{t.debit}</th>
                              <th className="p-3 text-start">{t.credit}</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y">
                          <tr>
                              <td className="p-3"><input className="w-full border rounded p-1" placeholder="Search Account..." /></td>
                              <td className="p-3"><input className="w-full border rounded p-1" /></td>
                              <td className="p-3"><input className="w-full border rounded p-1" type="number" /></td>
                              <td className="p-3"><input className="w-full border rounded p-1" type="number" /></td>
                          </tr>
                          <tr>
                              <td className="p-3"><input className="w-full border rounded p-1" placeholder="Search Account..." /></td>
                              <td className="p-3"><input className="w-full border rounded p-1" /></td>
                              <td className="p-3"><input className="w-full border rounded p-1" type="number" /></td>
                              <td className="p-3"><input className="w-full border rounded p-1" type="number" /></td>
                          </tr>
                      </tbody>
                  </table>
                  <button className="mt-4 bg-slate-100 text-slate-700 px-4 py-2 rounded text-sm hover:bg-slate-200">{t.addLine}</button>
              </div>
          </div>
      </div>
  );

  const renderSalesInvoiceForm = () => (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 animate-fade-in">
          <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-slate-800">{t.salesInvoice}</h3>
              <div className="flex gap-2">
                  <button className="bg-emerald-700 text-white px-4 py-2 rounded text-sm hover:bg-emerald-800">{t.save}</button>
                  <button onClick={() => setActiveView('dashboard')} className="bg-emerald-700 text-white px-2 py-2 rounded text-sm hover:bg-emerald-800"><X size={20} /></button>
              </div>
          </div>
          <div className="p-8 bg-slate-50/50">
              <div className="bg-white border border-emerald-700 rounded-lg p-6 max-w-5xl mx-auto mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      <div><label className="block text-sm text-slate-600 mb-1">{t.customer}</label><input className="w-full bg-white p-2 rounded border" /></div>
                      <div><label className="block text-sm text-slate-600 mb-1">{t.invoiceDate}</label><input type="date" className="w-full bg-white p-2 rounded border" /></div>
                      <div><label className="block text-sm text-slate-600 mb-1">{t.dueDate}</label><input type="date" className="w-full bg-white p-2 rounded border" /></div>
                  </div>
              </div>
              <div className="bg-white border border-emerald-700 rounded-lg p-6 max-w-5xl mx-auto">
                  <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b">
                          <tr>
                              <th className="p-3 text-start">{t.itemCode}</th>
                              <th className="p-3 text-start">{t.quantity}</th>
                              <th className="p-3 text-start">{t.rate}</th>
                              <th className="p-3 text-start">{t.amount}</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y">
                          <tr>
                              <td className="p-3"><input className="w-full border rounded p-1" /></td>
                              <td className="p-3"><input className="w-full border rounded p-1" type="number" /></td>
                              <td className="p-3"><input className="w-full border rounded p-1" type="number" /></td>
                              <td className="p-3 text-emerald-700 font-bold">0.00</td>
                          </tr>
                      </tbody>
                  </table>
                  <button className="mt-4 bg-slate-100 text-slate-700 px-4 py-2 rounded text-sm hover:bg-slate-200">{t.addLine}</button>
              </div>
          </div>
      </div>
  );

  return (
    <div className="space-y-6">
       {activeView !== 'dashboard' && (
           <button onClick={() => setActiveView('dashboard')} className="flex items-center gap-2 text-slate-500 hover:text-emerald-700 mb-2">
               {lang === 'ar' ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
               <span className="text-sm font-medium">{t.dashboard}</span>
           </button>
       )}
       
       {activeView === 'dashboard' && renderDashboard()}
       {activeView === 'journal_entry' && renderJournalEntryForm()}
       {activeView === 'sales_invoice' && renderSalesInvoiceForm()}
       {activeView === 'purchase_invoice' && <div className="text-center p-10 bg-white rounded border">{t.purchaseInvoice} Form Placeholder</div>}
       {activeView === 'ledger' && <div className="text-center p-10 bg-white rounded border">{t.generalLedger} View Placeholder</div>}
       {activeView === 'chart_of_accounts' && renderChartOfAccounts()}
    </div>
  );
};

// --- ESS MODULE ---
const ESSModule = ({ lang }: { lang: Language }) => {
    const t = TRANSLATIONS[lang];
    const [activeTab, setActiveTab] = useState('dashboard');
    
    // Shortcuts
    const shortcuts = [
        { title: t.leaveRequest, icon: Calendar, action: () => setActiveTab('leaves') },
        { title: t.payslip, icon: FileText, action: () => setActiveTab('payslips') },
        { title: t.healthInsurance, icon: Heart, action: () => {} },
    ];

    const renderDashboard = () => (
         <div className="space-y-8 animate-fade-in">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {shortcuts.map((s, i) => <ShortcutCard key={i} title={s.title} icon={s.icon} onClick={s.action} color="bg-indigo-600" />)}
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-4">{lang === 'ar' ? 'رصيد الإجازات' : 'Leave Balance'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100 text-center">
                        <span className="block text-2xl font-bold text-green-700">21</span>
                        <span className="text-sm text-green-600">{lang === 'ar' ? 'الرصيد السنوي' : 'Annual Balance'}</span>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
                        <span className="block text-2xl font-bold text-blue-700">5</span>
                        <span className="text-sm text-blue-600">{lang === 'ar' ? 'المستخدم' : 'Used'}</span>
                    </div>
                     <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 text-center">
                        <span className="block text-2xl font-bold text-amber-700">16</span>
                        <span className="text-sm text-amber-600">{lang === 'ar' ? 'المتبقي' : 'Remaining'}</span>
                    </div>
                </div>
             </div>
         </div>
    );

    const renderLeaves = () => (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
             <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-slate-800">{t.leaveRequest}</h3>
                 <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">{lang === 'ar' ? 'طلب جديد' : 'New Request'}</button>
             </div>
             <table className="w-full text-left rtl:text-right">
                 <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
                     <tr>
                         <th className="px-6 py-4">{lang === 'ar' ? 'النوع' : 'Type'}</th>
                         <th className="px-6 py-4">{lang === 'ar' ? 'من' : 'From'}</th>
                         <th className="px-6 py-4">{lang === 'ar' ? 'الأيام' : 'Days'}</th>
                         <th className="px-6 py-4">{t.status}</th>
                     </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                     {MY_LEAVES.map(l => (
                         <tr key={l.id}>
                             <td className="px-6 py-4">{l.type}</td>
                             <td className="px-6 py-4">{l.startDate}</td>
                             <td className="px-6 py-4">{l.days}</td>
                             <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs ${l.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{l.status}</span></td>
                         </tr>
                     ))}
                 </tbody>
             </table>
        </div>
    );

    const renderPayslips = () => (
        <div className="space-y-4 animate-fade-in">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600"><FileText size={24} /></div>
                        <div>
                            <p className="font-bold text-slate-800">{lang === 'ar' ? `راتب شهر ${11-i}` : `Salary Slip - Month ${11-i}`}</p>
                            <p className="text-sm text-slate-500">2023</p>
                        </div>
                    </div>
                    <div className="font-bold text-slate-700">1,500,000 IQD</div>
                    <button className="text-indigo-600 hover:text-indigo-700">{lang === 'ar' ? 'تنزيل' : 'Download'}</button>
                </div>
            ))}
        </div>
    );

    return (
        <div className="space-y-6">
           <div className="flex gap-2 border-b border-slate-200 pb-2">
              <button onClick={() => setActiveTab('dashboard')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}>{t.dashboard}</button>
              <button onClick={() => setActiveTab('leaves')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'leaves' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}>{lang === 'ar' ? 'الإجازات' : 'Leaves'}</button>
              <button onClick={() => setActiveTab('payslips')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'payslips' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}>{lang === 'ar' ? 'قسائم الراتب' : 'Payslips'}</button>
           </div>
           {activeTab === 'dashboard' && renderDashboard()}
           {activeTab === 'leaves' && renderLeaves()}
           {activeTab === 'payslips' && renderPayslips()}
        </div>
    );
};

// --- APP COMPONENT ---

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [user, setUser] = useState<User | null>(null);
  const [ministry, setMinistry] = useState<Ministry | null>(null);
  const [activeModule, setActiveModule] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  if (!user || !ministry) {
    return <LoginPage onLogin={(m, u) => { setMinistry(m); setUser(u); }} lang={lang} setLang={setLang} />;
  }

  const menuItems = [
    { id: 'dashboard', label: t.dashboard, icon: LayoutDashboard },
    { id: 'hr', label: t.hr, icon: Users },
    { id: 'finance', label: t.finance, icon: Landmark },
    { id: 'scm', label: t.scm, icon: Package },
    { id: 'ess', label: t.ess, icon: UserCircle },
    { id: 'settings', label: t.settings, icon: Settings },
  ];

  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-900 flex ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#004D40] text-white transition-all duration-300 flex flex-col fixed h-full z-20 shadow-xl ${lang === 'ar' ? 'right-0' : 'left-0'}`}>
        <div className="p-4 flex items-center justify-between border-b border-white/10 h-16">
           {isSidebarOpen ? (
               <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                       <img src={ministry.logo} className="w-6 h-6 object-contain" alt="Logo" />
                   </div>
                   <div className="leading-tight overflow-hidden">
                       <div className="font-bold text-sm truncate w-32">{lang === 'ar' ? ministry.nameAr : ministry.nameEn}</div>
                       <div className="text-[10px] text-emerald-300">INDC</div>
                   </div>
               </div>
           ) : (
               <div className="mx-auto"><img src={ministry.logo} className="w-8 h-8 object-contain" alt="Logo" /></div>
           )}
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
                {menuItems.map(item => (
                    <li key={item.id}>
                        <button 
                            onClick={() => setActiveModule(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${activeModule === item.id ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' : 'text-emerald-100 hover:bg-white/5'}`}
                        >
                            <item.icon size={22} className="min-w-[22px]" />
                            {isSidebarOpen && <span className="font-medium text-sm">{item.label}</span>}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
            <button onClick={() => { setUser(null); setMinistry(null); }} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-300 hover:bg-white/5 transition-colors">
                <LogOut size={20} />
                {isSidebarOpen && <span className="text-sm font-medium">{t.logout}</span>}
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isSidebarOpen ? (lang === 'ar' ? 'mr-64' : 'ml-64') : (lang === 'ar' ? 'mr-20' : 'ml-20')}`}>
        {/* Header */}
        <header className="bg-white h-16 border-b border-slate-200 sticky top-0 z-10 px-6 flex items-center justify-between shadow-sm/50">
            <div className="flex items-center gap-4">
                <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-slate-500 hover:text-[#004D40] transition-colors p-1 rounded-md hover:bg-slate-100">
                    <Menu size={24} />
                </button>
                <h1 className="text-xl font-bold text-slate-800 hidden md:block">
                    {menuItems.find(m => m.id === activeModule)?.label}
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Search className="absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 text-slate-400" size={16} />
                    <input 
                        type="text" 
                        placeholder={t.search}
                        className="bg-slate-100 border-none rounded-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2 text-sm w-64 focus:ring-2 focus:ring-[#004D40]/20 outline-none"
                    />
                </div>
                
                <button 
                    onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                    className="p-2 text-slate-500 hover:text-[#004D40] hover:bg-slate-50 rounded-full transition-colors relative"
                    title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                >
                    <Globe size={20} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-[#004D40] rounded-full border border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 rtl:pl-0 rtl:pr-4 border-l rtl:border-l-0 rtl:border-r border-slate-200">
                    <div className="text-right hidden md:block">
                        <div className="text-sm font-bold text-slate-800">{user.name}</div>
                        <div className="text-xs text-slate-500">{user.role}</div>
                    </div>
                    <img src={user.avatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Profile" />
                </div>
            </div>
        </header>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-x-hidden">
            {activeModule === 'dashboard' && (
                <div className="space-y-6 animate-fade-in">
                    <div className="bg-gradient-to-r from-[#004D40] to-emerald-800 rounded-2xl p-8 text-white shadow-xl shadow-emerald-900/10 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-2">{t.welcome} {lang === 'ar' ? ministry.nameAr : ministry.nameEn}</h2>
                            <p className="text-emerald-100 opacity-90 max-w-2xl">{t.iraqDataCenter}</p>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none">
                            <Landmark size={200} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard title={t.totalEmployees} value="1,245" icon={Users} color="bg-blue-500" trend={12} />
                        <StatCard title={t.budgetUtilization} value="65%" icon={PieChartIcon} color="bg-purple-500" trend={5} />
                        <StatCard title={t.lowStockItems} value="23" icon={Package} color="bg-orange-500" />
                        <StatCard title="Pending Requests" value="18" icon={Clock} color="bg-red-500" />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                             <h3 className="font-bold text-slate-800 mb-6">{t.salesTrends || 'Trends'}</h3>
                             <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={[{n:'Jan', v:400}, {n:'Feb', v:300}, {n:'Mar', v:550}, {n:'Apr', v:450}, {n:'May', v:600}, {n:'Jun', v:700}]}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="n" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="v" stroke="#059669" strokeWidth={3} dot={{r: 4, fill: '#059669', strokeWidth: 2, stroke: '#fff'}} />
                                    </LineChart>
                                </ResponsiveContainer>
                             </div>
                         </div>
                         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                             <h3 className="font-bold text-slate-800 mb-6">{t.budget || 'Budget'}</h3>
                             <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={BUDGET_ITEMS.slice(0, 5)}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="code" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                                        <Tooltip cursor={{fill: '#f8fafc'}} />
                                        <Bar dataKey="spent" fill="#059669" radius={[4, 4, 0, 0]} barSize={30} />
                                        <Bar dataKey="allocation" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={30} />
                                    </BarChart>
                                </ResponsiveContainer>
                             </div>
                         </div>
                    </div>
                </div>
            )}
            
            {activeModule === 'hr' && <HRModule lang={lang} />}
            {activeModule === 'finance' && <FinanceModule lang={lang} />}
            {activeModule === 'scm' && <SCMModule lang={lang} user={user} />}
            {activeModule === 'ess' && <ESSModule lang={lang} />}
            
            {activeModule === 'settings' && (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                    <Settings size={64} className="mx-auto text-slate-300 mb-4" />
                    <h2 className="text-2xl font-bold text-slate-400">Settings Module</h2>
                    <p className="text-slate-400">Under Development</p>
                </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default App;