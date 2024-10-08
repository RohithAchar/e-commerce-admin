"use client";

import { PlusIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

import { BillboardColumn, columns } from "./columns";

interface BillBoardClientProps {
  data: BillboardColumn[];
}

const BillboardsClient: React.FC<BillBoardClientProps> = ({ data }) => {
  const params = useParams();
  const route = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards(${data.length})`}
          description="Manage billboards for your store"
        />
        <Button onClick={() => route.push(`/${params.storeId}/billboards/new`)}>
          <PlusIcon className="w-4 h-4" />
          Add new billboard
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />
      <Heading title="API" description="Api lists." />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardsId" />
    </>
  );
};

export default BillboardsClient;
