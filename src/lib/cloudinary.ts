interface CloudinaryVideoOptions {
  width?: number;
}

interface CloudinaryPosterOptions {
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
  if (options.width) transforms.push(`w_${options.width}`);
  return `https://res.cloudinary.com/${cloudName}/video/upload/${transforms.join(",")}/${encodePublicId(publicId)}`;
};

export const getCloudinaryPosterUrl = (
  publicId: string,
  _options: CloudinaryPosterOptions = {},
): string => {
  return `https://res.cloudinary.com/${cloudName}/video/upload/f_jpg,q_auto,so_0,w_800/${encodePublicId(publicId)}.jpg`;
};
