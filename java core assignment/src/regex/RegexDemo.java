package regex;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexDemo {
    public static void main(String[] args) {
        // Define a regular expression pattern to match a sequence of digits
        Pattern pattern = Pattern.compile("\\d+");

        // Create a matcher for the input string
        Matcher matcher = pattern.matcher("Hello 123 World 456");

        // Find and print all occurrences of the pattern in the input string
        while (matcher.find()) {
            System.out.println("Match found at position " + matcher.start()
                    + " - " + matcher.end() + ": " + matcher.group());
        }
    }
}
