import AdminHeader from "@/components/admin/header/header";
import AdminTable from "@/components/admin/tablePosisi/table";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const cookieStore = await cookies(); // ⬅️ WAJIB await
  const role = cookieStore.get("auth")?.value;

  if (role !== "admin") {
    redirect("/login");
  }
return(
    <>
    <AdminHeader />
    <main className="max-w-7xl mx-auto p-4">
      <AdminTable />
    </main>

    </>
)
  
}
