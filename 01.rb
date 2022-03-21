# def cac(radius)
#     return 2 * Math::PI * radius  #有回傳值
# end

# def cac2(radius)
#     p 2 * Math::PI * radius # 無回傳值
# end

# # puts cac(5)
# cac2(5)

def is_adult?(age)
    age >= 18
end

# p is_adult?(20)
# p is_adult?(10)

# list = [9,5,2,7]
# p list.sort!
# p list


# class Cat 
#     def eat
#         return "haha"
#     end
# end

# kitty = Cat.new
# # p kitty


# class Animal
#     def walk
#         puts "haha"
#     end
# end

# class Dog < Animal
# end

# class Cat < Animal
#     def initialize (name,age) #初始化時執行的function
#         puts "hi, QQ"
#         @name = name
#         @age = age
#     end
# end

# kitty = Cat.new("KK",18)
# # kitty.walk
# kitty


class Cat
    attr_reader :name   ##等同68~70
    attr_writer :name   ##等同72~74

    def initialize(name)
        @name = name
    end

    def say_my_name
         @name
    end

    def name 
         @name
    end

    def name=(new_name)
        @name = new_name
    end
end

kitty = Cat.new("kitty kk")
p kitty.say_my_name
kitty.name = ("nancy")
p kitty.name

puts 1+2
puts 1.+2

class Dog
    @count = 0
    def initialize
        @count = 1
    end
    def self.counter
        @count
    end
end

snoopy = 5.times{Dog.new}

p snoopy.counter
