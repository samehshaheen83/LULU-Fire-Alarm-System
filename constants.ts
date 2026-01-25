
import { UserRole, User, Branch, Detector } from './types.ts';

export const INITIAL_USERS: User[] = [
  { id: '1', username: 'admin', password: '123', role: UserRole.ADMIN, fullName: 'مدير النظام' },
  { id: '2', username: 'user', password: '123', role: UserRole.USER, fullName: 'مستخدم عادي' },
];

export const INITIAL_BRANCHES: Branch[] = [
  { id: 'b1', name: 'لولو هايبر ماركت - البطحاء', code: 'LULU-001' },
  { id: 'b2', name: 'لولو هايبر ماركت - المربع', code: 'LULU-002' },
];

export const INITIAL_DETECTORS: Detector[] = [
  { id: 'd1', branchId: 'b1', loopNumber: '01', detectorNumber: '101', mapImage: 'https://picsum.photos/seed/d1/800/600', notes: 'Main Entrance - Heat Detector' },
  { id: 'd2', branchId: 'b1', loopNumber: '01', detectorNumber: '102', mapImage: 'https://picsum.photos/seed/d2/800/600', notes: 'Warehouse Section A - Smoke Detector' },
];

// Official Lulu Brand Colors
export const COLORS = {
  primary: '#008B45',    // Lulu Green
  secondary: '#ED1C24',  // Lulu Red
  accent: '#A68933',     // Lulu Gold
  background: '#F8FAFC',
};

// Lulu Group International Logo (Base64)
export const LULU_LOGO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAABACAYAAADeS6XFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAs1SURBVHhe7Z17jBTXFcd/M/uxy2NZHgqC8pAnvEVEK0Vp1UolUms08Y+miZo0RptojU20xtY0tWmb/tHURps0adMmrTVp06ZN2iRNmqS0SUpVWvUBlSceIqVAFESBvGXZXdh9zO69M997Z2Zndmd2Z3Z3YHeW70868849c+97d+bcOed3ztwD4vF47PjEIBo93t8R28MOfUf8N0vH9q06LzEIBo8PDH2n4XyH0mN66Fp+TjL7/X6t7N7R75Bv2909H4hK/fOOn9M2N07G31qK3/E/eN7GId+2u3tW6Z78mKbtYd/Xp7V+3D0vMdB6T99reXwM9K4+O7S3u2dfXl5ecvWfP7u8Y7vS78uX7S8H9B6HnBOn0rO9tGfbtp9S9Yv8zH7L12fW7fWJgdZfNf7m9mXre/t8v+7e0fd39M1h1uWw69uXp+f95I3X0P35/UvX8XN7l5+93XWp49Z69vXp7v39ff06Xo7S68z6/D0Ouydf6f39Pbt69pXW9X6N/p6eX3fPPisvMdB6Nve9Pj0m+rY/5Of07K2eHX69z8pLDLT+unW/258vB0r35Ofl0vuy/V7fz+7Zn++X79uX5/stX59Z6+P3GPh5Kz0vL3l0f15eXp6et1fve/m5uXp79v78PAsvUeP/8v72+pveP3V77eXvP0uvM+vz9zjsnny9nt2zr2f37OvZPX/T+4f19/T8unv2Wek9m/v9fXpM9G1/yM/p2Vs9O/x6n5WXGGj9deuunp97vWfl9Yv89K6enr3Vs8Ov91l5iYHWXzX+5vbtPevf9Oytnh1+vc/KSwy0/rr1Xp+vS3fvvz/f7+V6H9Z6dvR+dveOvn+6e7vntH3eWdfx8/6Vv9ezt7ouX+m7/H75/mF9vV/H39Pz6+7ZZ6X3bO739+kx0bf9IT+nZ2/17PCXvu997K2ey/v3l9fS+4fP7XNbeXl5ydHn5Ofl5WV35ffL98v3vU+P+fL6fHl9vjy9OqXPl9f76M/5eT2fL8/X63X65XN7mXW97v6+fDleZ6Vnr7N775/O7vev/Fz69fK5vcy6Xv97vU7f94f09Xf5XPr18rm9zD4vLzeX7r1/OsvvP97v5XOfWderY/fsS12Xv7c7+vV3+Xz69fK5vcy6Xv97fV7H39Pz6+6Xp+f1PsuX9578vLyeHev9I/+8pXv3T8/7p+Vj+Vz69fK5vcy6XnfPPlv5vS+vX15er677l5eXt8vS65ee7bL0+qVnu8p/l6fXLz3bZf7P/5vP69X7pWfH79fP/W9+7v397f7+/O/1eX7vIe8P7vP+vH+89fK9vXyv77X83KeeHb8m6/M++X3ye/W+6Vv5vL4+v0Y+H4/0vO6efT27Z+f/zY/9R/X/D95S/18qN63l5+T1Svf7/fL6pW9Sffr18rL/y8v+v3zeS9+k+vTr5WX/l5f9f/m8l75J9enXy8v+Ly/7v7zcTP/l8176JtWn79L9+vP5vFy+pD9ffn5uL8vPz+1l+fl5fV6fX6vP7WXZff909/6r08vP+5L/pWfH77X73v/ms/p6pW9iX67vL8vP/pA/U7onv09+v75/pW9iP7vP79f3l9f7L32TfL8vPy+v6S+/T36/vn9Y31/pPr8v3/e/pW+S37O5v6ZvpWdSffp+nO7Pz83l5+bz9fT8evlcPr6O35PPr9XreXm9X57O7vevtP79Gv169vNye3YvL6/f5vV5ff4eh52Xl+fn9pT8OsvLyf/v0+v9/t56/f7z6P68/P/6vL99m9vX78vPy8vL0/NzenZefu7fX36e39f37+h+jX49fXvXp/uW9q/0Wf631p9vL39uvU6fX/m9fnn+Hp9f77fS/9Xvze/39/p8vV6f1+fL8/V6fV6f1+f1eX1en9fn9Xl9Xp/X5/V5fV6f1+f1eX1e/8F6vU6fX/m9fnl+rU6fX/m9XvL5enX0ev/98vXm9/X7fXl+7X7fT5+V33up358v6fPy8rK7f67vX36un9P779fr9OvZz8vt2b28vH6b1+f1+Xscdl5ev83r8/v0eL297y+v9/v79Xp6v7+3XvLp9Xp6v7+3XvLp9Xp6v7+3XvLp9Xp6v7+3XvLp9Xp6v7+3XvLp9Xp6v79fr6f39+vtX6un9/f7fXm+39f7vP6O/rz35eXl5fW83fL6Xf/W++fL6Xm7XpYv+W/6vP9+f69/rv+8v/S8r/S8r/S8r/S8r/S8r/S8r/S8r/S8r/S8r/S8r/T8uun9vX7f/9bP8n/5ef+8X75efv7P7fP5vHzZ78vr5Wdvt9zP/8vPy9frP9fn6/XPy+fv8f9u7vX3vVzve3v5Wv35el6f1+fvebve9/f5efX+vtfr1fM80vPy8z68Z/+Ovt3t9/vS6/z/9Tr9PZ6V3p691bPDr/f36fXn/eSN97x0+vV9v87z9OnR8/u8XN6v75frffn69GzX8+XPy58vPy9frzP3986Xl+v1Xqevv8/H1/H7pM/z5fXv5et1Z97v9Xp+z9/093r2Wf6G9w+/R/q2PyTP3urZ4df7u/2eX58eE33bH/JzevZWzw59rvf9R58eE32p7Xm/pbe8f+h+TstLpW6Xntv7/9XPyUul9pA+Py8vk/P79GxvdfveX/pD+rzv8v6V39OzvU+v7m963XvL85e6p86P76O6rW6v6/u51XnpuVf3775f0r6v7l79XN/9/pXuvX/6Pqo79v2S9n11f6Nvz76evdV19v76d8/u3l9+v2dfat3v96Vur73uOub6UqnrGv38ve6ePdvnP1df/uR9W9re/f2O/v3l0nO7v985/u6R7ndL3UffH3m939Hfs7tnt86/6Xm7u78v6Vml78vIun/kX/6uUu/V1f278m+V/r50v7N77786vfa69/7p7M7vd/Tv96+X9+8vP7f6X/m51f/Kz61er7vP7zX6vO7e6nm+fG4vc1+uf97f5/v19er5enp69fTsq/f09OvZ39uv069nv9/fp/P58nO9fP+O3/P3+f06n89vz+7T+Xz5unv+vHz+Xv++Xu/vz/vL+9vr9Pq7fH7p18vn9vL8vE+v0+9f6df7fD6vz5evp6f39/f8+3N9vV9fr9f7en6f7vf5vD5/r8/f69X7pXv3T8/7p+Xf176e7fPy8rI6fl6u8mXv8v6Vn+vn/X5fvv75vH+8X75evlfv69nd+/v7+vS59Xf5XPr979fL9+3Ove/l8/f6ffp5vF6vX8fP+8nbK/8vf9bT7/dz6dfL5/Yye9P7p+f97Fjvy98n7+vX/f3+fv72et+Y+vv6+0vP293v73f0z/V3v7/H6/T8uul9P+799+Xn7fPy8+ve16v796X7Xp/f5/f5fd6f93v+P/r78vL1ej279778vLz39Z9bt8/Ly8vT83p7fl5ev93L8/P75Pvy/fL9evm5Xf++X5fP7eXvy8vX8/fI972u1Pvy9/v8uvv79Prf69796S99X/m7vO66Xn9P/99en7/X69U6Pn9Pr7/rZfp+fS79Xl6vU6v7+3N7f1/v83t+/p7X7fN6Pfv8fX79fXm5vbw8X6/P8/Nye/m+/L7X8vPyen/vfb2enX++P+f3yVf658vv7dfp+XfPvl6v9On/756v0/Pz/vLz87r1XmfdXp+P6v6lX6/T6+/z9TqzPj+vz+/v8/f8/D6/5+f7Xv29Xn6vj5fntvLy6+z9/Pz98vXm9zntntfr1fP7enZez5efn9vrfO7S8+qUvs9v8/f4+3T3776/e91ez97fO1+u1+v5fX7PXv38vb8vT6/Xz8uNf6v94D/x3v3/Ab607XFCHvYpAAAAAElFTkSuQmCC";

// UI Strings for Multi-language Support
export const UI_STRINGS = {
  ar: {
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    loginError: 'اسم المستخدم أو كلمة المرور غير صحيحة',
    login: 'تسجيل الدخول',
    dashboard: 'لوحة التحكم',
    branches: 'الفروع',
    detectors: 'الكواشف',
    query: 'استعلام',
    addDetector: 'إضافة كاشف',
    addBranch: 'إضافة فرع',
    editBranch: 'تعديل فرع',
    branchName: 'اسم الفرع',
    branchCode: 'رمز الفرع',
    save: 'حفظ',
    cancel: 'إلغاء',
    importExcel: 'استيراد اكسل',
    selectBranch: 'اختر الفرع',
    loopNumber: 'رقم الحلقة',
    detectorNumber: 'رقم الكاشف',
    description: 'الوصف',
    notes: 'الملاحظات',
    actions: 'الإجراءات',
    importSuccess: 'تم الاستيراد بنجاح',
    importError: 'خطأ أثناء الاستيراد',
    edit: 'تعديل',
    uploadMap: 'تحميل المخطط',
    search: 'بحث',
    searchResults: 'نتائج البحث',
    userManagement: 'إدارة المستخدمين',
    logout: 'تسجيل الخروج',
  },
  en: {
    username: 'Username',
    password: 'Password',
    loginError: 'Invalid username or password',
    login: 'Login',
    dashboard: 'Dashboard',
    branches: 'Branches',
    detectors: 'Detectors',
    query: 'Query',
    addDetector: 'Add Detector',
    addBranch: 'Add Branch',
    editBranch: 'Edit Branch',
    branchName: 'Branch Name',
    branchCode: 'Branch Code',
    save: 'Save',
    cancel: 'Cancel',
    importExcel: 'Import Excel',
    selectBranch: 'Select Branch',
    loopNumber: 'Loop #',
    detectorNumber: 'Detector #',
    description: 'Description',
    notes: 'Notes',
    actions: 'Actions',
    importSuccess: 'Imported successfully',
    importError: 'Error importing data',
    edit: 'Edit',
    uploadMap: 'Upload Map',
    search: 'Search',
    searchResults: 'Search Results',
    userManagement: 'User Management',
    logout: 'Logout',
  }
};
