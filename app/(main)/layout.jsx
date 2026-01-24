// app/(dashboard)/layout.jsx
import DashboardClientLayout from "@/(main)/sidebar-layout";

export default function Layout({ children }) {
    return (
        <DashboardClientLayout>
            {children}
        </DashboardClientLayout>
    );
}