/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (!numbers.length) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripple: number[] = numbers.map(
        (numbers: number): number => numbers * 3,
    );

    return tripple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let numbered: number[] = numbers.map(
        (numbers: string): number => +numbers || 0,
    );
    return numbered;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let numbered: number[] = amounts.map((amounts: string): number =>
        amounts[0] === "$" ? +amounts.slice(1) || 0 : +amounts || 0,
    );
    return numbered;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let messaged: string[] = messages.filter(
        (messages: string): boolean => !messages.includes("?"),
    );
    messaged = messaged.map((messaged: string): string =>
        messaged.at(-1) === "!" ? messaged.toUpperCase() : messaged,
    );
    return messaged;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let worded: string[] = words.filter(
        (words: string): boolean => words.length < 4,
    );
    return worded.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (!colors.length) {
        return true;
    }
    let colored: boolean = colors.every(
        (colors: string): boolean =>
            colors.toLowerCase() === "red" ||
            colors.toLowerCase() === "blue" ||
            colors.toLowerCase() === "green",
    );
    return colored;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (!addends.length) {
        return "0=0";
    }
    let sum: number = 0;
    sum += addends.reduce((total: number, num: number) => total + num, 0);
    let addended: string = addends.join("+");

    return sum.toString() + "=" + addended;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let dummy: number[] = values.map((values: number): number => values);
    let negative: number[] = [];
    let sum_lis: number[] = values.map((values: number): number =>
        negative.length === 0 ?
            values >= 0 ?
                values
            :   (negative.push(values), 0)
        :   0,
    );
    let sum: number = sum_lis.reduce(
        (total: number, num: number) => total + num,
        0,
    );
    let index: number = values.findIndex(
        (values: number): boolean => values < 0,
    );

    index >= 0 ? dummy.splice(index + 1, 0, sum) : (dummy = [...dummy, sum]);

    return dummy;
}
