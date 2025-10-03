import { getMemberById } from '@/lib/db';
import MemberCard from '@/components/member-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, UserX } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

export default async function MemberPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const memberId = typeof searchParams?.id === 'string' ? searchParams.id : undefined;

  if (!memberId) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
        <Card className="w-full max-w-md text-center shadow-lg">
          <CardHeader>
            <div className="mx-auto bg-destructive/10 p-3 rounded-full w-fit">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">No Member ID provided.</p>
            <p className="text-muted-foreground mt-2">Please scan the QR code again or check the URL.</p>
            <Button asChild variant="link" className="mt-4">
              <Link href="/">Return to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  const member = await getMemberById(memberId);

  if (!member) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
        <Card className="w-full max-w-md text-center shadow-lg">
           <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
              <UserX className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Member Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">The member ID "{memberId}" could not be found.</p>
            <p className="text-muted-foreground mt-2">Please check the ID and try again.</p>
             <Button asChild variant="link" className="mt-4">
              <Link href="/">Return to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }
  
  const serializedMember = {
    ...JSON.parse(JSON.stringify(member)), // Serialize ObjectId and Date
    memberSince: member.memberSince.toISOString(),
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <MemberCard member={serializedMember} />
    </main>
  );
}
