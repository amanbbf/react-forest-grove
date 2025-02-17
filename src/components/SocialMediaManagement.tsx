
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";

type SocialMediaLink = {
  id: string;
  platform: string;
  url: string;
  icon: string;
  display_order: number;
  is_visible: boolean;
};

export default function SocialMediaManagement() {
  const [links, setLinks] = useState<SocialMediaLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const { data, error } = await supabase
        .from('social_media_links')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      setLinks(data);
    } catch (error) {
      console.error('Error fetching links:', error);
      toast.error("Failed to load social media links");
    } finally {
      setLoading(false);
    }
  };

  const updateLink = async (id: string, updates: Partial<SocialMediaLink>) => {
    try {
      const { error } = await supabase
        .from('social_media_links')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      toast.success("Link updated successfully");
      fetchLinks();
    } catch (error) {
      console.error('Error updating link:', error);
      toast.error("Failed to update link");
    }
  };

  const handleVisibilityChange = (id: string, isVisible: boolean) => {
    updateLink(id, { is_visible: isVisible });
  };

  const handleUrlChange = (id: string, url: string) => {
    updateLink(id, { url });
  };

  const handleOrderChange = (id: string, newOrder: number) => {
    updateLink(id, { display_order: newOrder });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Links</CardTitle>
        <CardDescription>
          Manage your social media links that appear on the contact page.
          Only the first 3 visible links will be shown initially.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {links.map((link, index) => (
            <div key={link.id} className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-24">
                <Label>{link.platform}</Label>
              </div>
              <div className="flex-1">
                <Input
                  value={link.url}
                  onChange={(e) => handleUrlChange(link.id, e.target.value)}
                  placeholder="Enter URL"
                />
              </div>
              <div className="w-20">
                <Input
                  type="number"
                  value={link.display_order}
                  onChange={(e) => handleOrderChange(link.id, parseInt(e.target.value))}
                  min={1}
                  max={links.length}
                />
              </div>
              <div className="flex items-center gap-2">
                <Label>Visible</Label>
                <Switch
                  checked={link.is_visible}
                  onCheckedChange={(checked) => handleVisibilityChange(link.id, checked)}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
