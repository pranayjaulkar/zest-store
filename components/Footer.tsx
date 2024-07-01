import { getStore } from "@/actions";

export default async function Footer({ className, storeId }: { className: string; storeId: string }) {
  let store = await getStore(storeId);
  return (
    <footer className={className}>
      <div className="bg-white border-t">
        <div className="mx-auto py-10">
          <p className="text-center text-xs text-black">&copy; 2023 {store.name}, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
