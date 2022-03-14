list = [1,2,3,4,5]

p list.map { |item|   # {}執行順序較優先
    item * 2
}

p list.map do |item|  # do end 執行順序較後  不給執行後面block
    item * 2
end

# add_two = Proc.new {|n| n + 2} #將block物件化，同時||內的值，要等到前面方法拋出yield
# add_two = lambda {|n| n + 2} #|將block物件化|內的值，要等到前面方法拋出yield 
add_two = -> (n) {n+2}  #|將block物件化|內的值，要等到前面方法拋出yield 

#各種方法呼叫block物件
p add_two.call(1)  #使用call呼叫物件，並帶入值
p add_two[3]
p add_two.(3)
p add_two.===(3)  

add_two_proc = Proc.new {|n| n +2}
add_two_lambda = lambda {|n| n +2}

p add_two_proc.call(1,2,3)
p add_two_lambda.call(1,2,3)