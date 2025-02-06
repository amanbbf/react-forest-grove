import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Update {
  id: string;
  title: string;
  content: string;
  status: string;
  published_at: string;
}

interface UpdateCardProps {
  update: Update;
  onEdit: (update: Update) => void;
  onDelete: (id: string) => void;
}

export function UpdateCard({ update, onEdit, onDelete }: UpdateCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{update.title}</CardTitle>
            <CardDescription>
              {new Date(update.published_at).toLocaleDateString()}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onEdit(update)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onDelete(update.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div 
          className="prose max-w-none text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: update.content }}
        />
      </CardContent>
    </Card>
  );
}