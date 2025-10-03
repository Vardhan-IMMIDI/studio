import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ScanQrCode } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center items-center mb-6">
          <ScanQrCode className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight font-headline text-primary sm:text-6xl">
          FarmerCard
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          Welcome to the Farmer's Produce Organization digital membership platform.
        </p>
        <p className="mt-2 text-md text-muted-foreground">
          Scan your QR code to view your digital membership card.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Card className="text-left w-full shadow-lg">
            <CardHeader>
              <CardTitle>View a Demo</CardTitle>
              <CardDescription>
                Click the link below to see an example member card. In a real scenario, this page would open after scanning a QR code.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/member?id=FARMER001">
                  View Demo Card for FARMER001
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
