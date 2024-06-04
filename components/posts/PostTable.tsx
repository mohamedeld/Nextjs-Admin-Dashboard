import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {IPost} from "@/types/post";
import posts from "@/data/posts"
interface PostTableProps{
  limit?:number;
  title?:string;
}

const PostTable = ({limit,title}:PostTableProps) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title? title :'Posts'}</h3>
      <Table>
  {/* <TableCaption>A list of your recent posts.</TableCaption> */}
  <TableHeader>
    <TableRow>
      <TableHead>Title</TableHead>
      <TableHead className="hidden md:table-cell">Author</TableHead>
      <TableHead className="hidden md:table-cell text-right">Date</TableHead>
     
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      posts?.map((post:IPost)=>{
        return (
    <TableRow key={post.id}>
      <TableCell>{post.title}</TableCell>
      <TableCell className="hidden md:table-cell">{post.author}</TableCell>
      <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
    </TableRow>
        )
      })
    }
  </TableBody>
</Table>
    </div>
  )
}

export default PostTable