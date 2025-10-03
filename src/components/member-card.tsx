'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Calendar, User } from 'lucide-react';
import type { SerializedFarmer } from '@/lib/types';
import { format } from 'date-fns';

export default function MemberCard({ member }: { member: SerializedFarmer }) {
  const memberSinceDate = new Date(member.memberSince);

  return (
    <Card className="w-full max-w-md shadow-xl bg-card/80 backdrop-blur-sm border-primary/20 animate-fade-in">
      <CardHeader className="items-center text-center p-6 space-y-2">
        <Avatar className="w-24 h-24 border-4 border-accent">
          <AvatarImage src={member.profileImageUrl} alt={member.fullName} data-ai-hint="profile picture" />
          <AvatarFallback>
            <User className="w-12 h-12 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <div className="pt-2">
            <CardTitle className="text-2xl font-headline text-primary">{member.fullName}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground pt-1">ID: {member.memberId}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-6 pt-2">
        <div className="flex items-center gap-4 text-foreground">
          <MapPin className="h-5 w-5 text-accent" />
          <span>{member.village}</span>
        </div>
        <div className="flex items-center gap-4 text-foreground">
          <Calendar className="h-5 w-5 text-accent" />
          <span>Member since {format(memberSinceDate, 'MMMM yyyy')}</span>
        </div>
      </CardContent>
    </Card>
  );
}
