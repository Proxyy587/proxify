import { Schema, model, models } from "mongoose";

export interface IImage extends Document{
    title: string;
    transformation: string;
    publicId: string;
    securedUrl: string;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    createdAt?: Date;
    updatedAt?: Date;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }
}

const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformation: { type: String, required: true },
    publicId: { type: String, required: true },
    securedUrl: { type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    createdAt: { type: Date,default: Date.now },
    updatedAt: { type: Date,default: Date.now },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image;