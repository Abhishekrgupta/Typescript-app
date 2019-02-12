class StringOperations {
    getLength(str: string): number {
        return str.length;

    }

    changeCase(str: string, format: string): string {

        if (format == 'U') {
            return str.toUpperCase();
        }
        if (format == 'L') {
            return str.toLowerCase();
        }
        return str;
    }
}