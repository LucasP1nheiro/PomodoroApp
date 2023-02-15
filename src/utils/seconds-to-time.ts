export function secondsToTime(seconds: number): string {
    const leftZero = (n: number) => Math.floor(n).toString().padStart(2, '0');
    const min = leftZero(Math.floor(seconds / 60) % 60);
    const sec = leftZero(Math.floor(seconds % 60) % 60);

    if (seconds === 60 * 60) {
        return '60:00'
    }

    if (seconds < 0) {
        return '00:00';
    }
    return `${min}:${sec}`;
}