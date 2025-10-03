import type { Document, ObjectId } from 'mongodb';

export interface Farmer extends Document {
  _id: ObjectId;
  memberId: string;
  fullName: string;
  village: string;
  memberSince: Date;
  profileImageUrl: string;
}

export type SerializedFarmer = Omit<Farmer, '_id' | 'memberSince'> & {
  _id: string;
  memberSince: string;
};
