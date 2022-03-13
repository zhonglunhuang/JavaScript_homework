# 1. 請使用迴圈的方式，在畫面上印出以下結果：

# *
# **
# ***
# ****
# *****

for x  in  1..5 do
    p "*" * x    
end

# 2. 請完成以下計算潤年的方法：

def is_leap_year?(y)
  y % 4 == 0 && y % 100 != 0 || y % 400 == 0 
end

puts is_leap_year?(1998)  # 印出 false
puts is_leap_year?(2000)  # 印出 true
puts is_leap_year?(2100)  # 印出 false


# 3. 請讓這個 BMI 計算方法可以顯示期待的結果

def bmi_calculator(height, weight)
    result = weight.to_f /  ((height.to_f/100)**2)
  return result.round(1)
end
 
puts bmi_calculator(170, 50) # 印出 17.3 (小數點以下一位，四捨五入)
puts bmi_calculator(180, 65) # 印出 20.1 (小數點以下一位，四捨五入)

# ruby在運算上如果是
# 單純的整數運算，返回值就是整數
# 如果算式中有浮點數，則會返回浮點數
# 比較重要的是整數除法會返回商的整數部份
# 1 + 1           # 2
# 1.0 + 1.0       # 2.0
# 10 / 4          # 2
# 10 / 4.0        # 2.5
# 10.0 / 4.0      # 2.5