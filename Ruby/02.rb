p (1..100).select{|n| n.odd?}

def my_select(list)
    result = []
    list.each do |ele| 
       result << ele if yield(ele)  #將ele塞入result陣列，如果yield回傳block後為true
    end
    result   #可視為回傳值
end

p my_select([1,2,3,4,5]) { |i| i.odd? } 
p my_select(1..100) {|i| i.odd?}