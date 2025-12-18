import { format, formatDistanceToNow } from "date-fns";

/**
 * Format MongoDB date to DD-MM-YYYY
 */
export const formatDate = (date) => {
    if (!date) return "";
    return format(new Date(date), "dd-MM-yyyy");
};

/**
 * Format MongoDB date to "2 hours ago"
 */
export const timeAgo = (date) => {
    if (!date) return "";
    return formatDistanceToNow(new Date(date), { addSuffix: true });
};
