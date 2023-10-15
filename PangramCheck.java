import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;
public class PangramChecker {
    public static void main(String[] args) {
        Set<Character> alphabetSet = new HashSet<>();
        for (char c = 'A'; c <= 'Z'; c++) {
            alphabetSet.add(c);
        }
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence to check if it's a pangram: ");
        String input = scanner.nextLine();
        scanner.close();
        input = input.toUpperCase();
        Set<Character> inputSet = new HashSet<>();
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                inputSet.add(c);
            }
        }
        if (inputSet.containsAll(alphabetSet)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
