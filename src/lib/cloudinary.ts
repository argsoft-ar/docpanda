interface CloudinaryVideoOptions {
  width?: number;
}

interface CloudinaryPosterOptions {
  width?: number;
}

interface CloudinaryImageOptions {
  width?: number;
}

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as
  | string
  | undefined;

// Fail fast in dev so misconfiguration is obvious
if (import.meta.env.DEV && !cloudName) {
  throw new Error("Missing VITE_CLOUDINARY_CLOUD_NAME in .env");
}

// Encode each path segment but preserve slashes for folder structure
const encodePublicId = (id: string) =>
  id.split("/").map(encodeURIComponent).join("/");

export const getCloudinaryVideoUrl = (
  publicId: string,
  options: CloudinaryVideoOptions = {},
): string => {
  const transforms = ["f_auto", "q_auto", "vc_auto"];
  if (options.width) transforms.push("c_limit", `w_${options.width}`);
  return `https://res.cloudinary.com/${cloudName}/video/upload/${transforms.join(",")}/${encodePublicId(publicId)}`;
};

export const getCloudinaryPosterUrl = (
  publicId: string,
  options: CloudinaryPosterOptions = {},
): string => {
  const width = options.width ?? 800;
  return `https://res.cloudinary.com/${cloudName}/video/upload/f_jpg,q_auto,so_0,w_${width}/${encodePublicId(publicId)}.jpg`;
};

export const getCloudinaryPosterSrcSet = (
  publicId: string,
  widths: readonly number[],
): string =>
  widths
    .map((w) => `${getCloudinaryPosterUrl(publicId, { width: w })} ${w}w`)
    .join(", ");

const CLOUDINARY_ORIGIN = "https://res.cloudinary.com/";
const IMAGE_UPLOAD_SEGMENT = "/image/upload/";

const getUploadOffset = (url: string): number => {
  if (!url.startsWith(CLOUDINARY_ORIGIN)) return -1;
  const index = url.indexOf(IMAGE_UPLOAD_SEGMENT);
  return index === -1 ? -1 : index + IMAGE_UPLOAD_SEGMENT.length;
};

/** Adds f_auto,q_auto (and an optional c_limit width) to a Cloudinary image delivery URL. Other URLs are returned untouched. */
export const getCloudinaryImageUrl = (
  url: string,
  options: CloudinaryImageOptions = {},
): string => {
  const offset = getUploadOffset(url);
  if (offset === -1) return url;
  const transforms = ["f_auto", "q_auto"];
  if (options.width) transforms.push("c_limit", `w_${options.width}`);
  return `${url.slice(0, offset)}${transforms.join(",")}/${url.slice(offset)}`;
};

export const getCloudinaryImageSrcSet = (
  url: string,
  widths: readonly number[],
): string | undefined => {
  if (getUploadOffset(url) === -1) return undefined;
  return widths
    .map((w) => `${getCloudinaryImageUrl(url, { width: w })} ${w}w`)
    .join(", ");
};
