"use client"

import { useEffect } from "react";

export default function DashboardPage(): JSX.Element {

  useEffect(() => {
    const login = localStorage.getItem('isLogin');
    if (!login) {
      window.location.href = '/admin/auth';
    }
  }, []);

  return (
    <div>DashboardPage</div>
  );
}