
import java.util.Scanner;

public class C_pangramChecker {
    public static boolean isPangram(String str) {
        boolean[] alphabetPresent = new boolean[26];

        str = str.toLowerCase();

        // Iterate through the characters in the string
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);

            if ('a' <= c && c <= 'z') {
                int index = c - 'a';
                alphabetPresent[index] = true;
            }
        }

        // Check if all alphabet letters are present
        for (boolean isPresent : alphabetPresent) {
            if (!isPresent) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        boolean isPangram = isPangram(str.toLowerCase());
        System.out.println("Is Pangram? " + isPangram);
    }
}
