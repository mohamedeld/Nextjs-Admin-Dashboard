import DashboardCard from "@/components/dashboard/dashboardCard";
import PostTable from "@/components/posts/PostTable";
import { Folders, MessageCircle, Newspaper, Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
      <DashboardCard title="Posts" count={100} icon={<Newspaper className='text-slate-500' size={72}/>}/>
      <DashboardCard title="Categories" count={12} icon={<Folders className='text-slate-500' size={72}/>}/>
      <DashboardCard title="Users" count={750} icon={<Users className='text-slate-500' size={72}/>}/>
      <DashboardCard title="Comments" count={1200} icon={<MessageCircle className='text-slate-500' size={72}/>}/>
    </div>
    <PostTable title={"Latest Posts"}/>
    </>
  );
}
