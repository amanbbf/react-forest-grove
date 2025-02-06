import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RichTextEditor } from "../RichTextEditor";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UpdateFormProps {
  isEditing: boolean;
  update: {
    title: string;
    content: string;
    status: string;
  };
  onUpdateChange: (update: { title: string; content: string; status: string }) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel?: () => void;
}

export function UpdateForm({ isEditing, update, onUpdateChange, onSubmit, onCancel }: UpdateFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isEditing ? "Edit Update" : "Create New Update"}
        </CardTitle>
        <CardDescription>
          {isEditing
            ? "Modify the existing update"
            : "Add a new update to share with users"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Update Title"
              value={update.title}
              onChange={(e) =>
                onUpdateChange({ ...update, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <RichTextEditor
              content={update.content}
              onChange={(content) =>
                onUpdateChange({ ...update, content })
              }
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit">
              {isEditing ? "Save Changes" : "Create Update"}
            </Button>
            {isEditing && onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}