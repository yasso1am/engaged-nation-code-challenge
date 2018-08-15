@user_name = ["Avery", "Brooke", "Carden", "Drew", "Elijah", "Frank"]

def menu
 puts "Welcome!"
 puts "Are you new here? 1) Yes, 2) No, 3) I don't want to be here"
 user_choice = gets.chomp.to_i

   case user_choice
     when 1
       puts "Welcome new user"
       puts "Let's create your contact"
       puts "What is your name?"
       user_name = gets.chomp
       @user_name.insert(0, user_name)
       puts @user_name
       puts "User account created."
     when 2
        puts "Welcome back!"
        puts "Please select your name"
        puts "Avery", "Brooke", "Carden", "Drew", "Elijah", "Frank"
        @user_name = gets.chomp
     if @user_name == "Avery"
        puts "Avery is awesome!"
     elsif @user_name == "Brooke"
        puts "Brooke is the bomb!"
     elsif @user_name == "Carden"
        puts "Carden is cool!"
     elsif @user_name == "Drew"
        puts "Drew is dreamy ;)"
     elsif @user_name == "Elijah"
        puts "Elijah is Excellent!"
     elsif @user_name == "Frank"
        puts "Frank is fantastic!"
     end
     when 3
        puts "Loser! Goodbye."
     when 4
        puts "Nice try!  Pick 1, 2, or 3."
     else
        menu
     end
end

menu