import { UpdateCard } from "./UpdateCard";

interface Update {
  id: string;
  title: string;
  content: string;
  status: string;
  published_at: string;
}

interface UpdateListProps {
  updates: Update[];
  onEdit: (update: Update) => void;
  onDelete: (id: string) => void;
}

export function UpdateList({ updates, onEdit, onDelete }: UpdateListProps) {
  return (
    <div className="grid gap-4">
      {updates?.map((update) => (
        <UpdateCard
          key={update.id}
          update={update}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}