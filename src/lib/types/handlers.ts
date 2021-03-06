/**
 * The node-style callback to a task accepts either two arguments with the first as a null
 * and the second as the data, or just one argument which is an error.
 */
export interface SimpleGitTaskCallback<T = string> {
   (err: null, data: T): void;

   (err: Error): void;
}
