import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { MapPin, Calendar } from 'lucide-react';

export default function MemberLoading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="items-center text-center p-6 space-y-2">
          <Skeleton className="h-24 w-24 rounded-full" />
          <div className="pt-2 space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-5 w-32 mx-auto" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4 p-6 pt-2">
           <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <Skeleton className="h-5 w-1/2" />
          </div>
           <div className="flex items-center gap-4">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <Skeleton className="h-5 w-2/3" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
