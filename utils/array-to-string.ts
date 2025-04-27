export default function arrayToString<T>(array: T[]): string {
    return '[' + array.join(', ') + ']';
}