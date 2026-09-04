const examDatabase = [
    {
        "year": "2565",
        "name": "การสอบซ่อมภาค 1 ปี 2565",
        "questions": [
            {
                "problem": "รับข้อมูลน้ำหนัก (40-80) และส่วนสูง (150-195) ของนักเรียน 78 คน และแสดงข้อมูลทั้งหมดก่อนจบการทำงาน",
                "solution": "Function Main\n    Declare Integer i\n    Declare Real weight[78], height[78]\n    Declare Integer valid\n    For i = 0 To 77\n        Assign valid = 0\n        While valid == 0\n            Output \"Enter weight (40-80):\"\n            Input weight[i]\n            Output \"Enter height (150-195):\"\n            Input height[i]\n            If weight[i] >= 40 And weight[i] <= 80 And height[i] >= 150 And height[i] <= 195 Then\n                Assign valid = 1\n            Else\n                Output \"Invalid, try again\"\n            End If\n        End While\n    End For\n    For i = 0 To 77\n        Output \"Student \" & (i + 1) & \" Weight: \" & weight[i] & \" Height: \" & height[i]\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode รับข้อมูลสถิติการว่ายน้ำที่ดีที่สุด (<= 15 นาที) ของนักว่ายน้ำ 50 คน ใน 2 ภาคการศึกษา และเก็บข้อมูลลงในอาร์เรย์ 2 มิติ",
                "solution": "Function Main\n    Declare Real time[50][2]\n    Declare Integer i, j\n    Declare Integer valid\n    For i = 0 To 49\n        For j = 0 To 1\n            Assign valid = 0\n            While valid == 0\n                Output \"Enter time for swimmer \" & (i + 1) & \" semester \" & (j + 1) & \" (max 15):\"\n                Input time[i][j]\n                If time[i][j] <= 15 Then\n                    Assign valid = 1\n                Else\n                    Output \"Invalid, try again\"\n                End If\n            End While\n        End For\n    End For\n    For i = 0 To 49\n        Output \"Swimmer \" & (i + 1) & \" Sem 1: \" & time[i][0] & \" Sem 2: \" & time[i][1]\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode เพื่อคำนวณพื้นที่ของสี่เหลี่ยมจัตุรัส 50 รูป (ความยาวด้าน <= 50 เมตร) และหาพื้นที่เฉลี่ยทั้งหมด",
                "solution": "Function Main\n    Declare Real side[50], area[50]\n    Declare Real totalArea, avgArea\n    Declare Integer i\n    Declare Integer valid\n    Assign totalArea = 0\n    For i = 0 To 49\n        Assign valid = 0\n        While valid == 0\n            Output \"Enter side for square \" & (i + 1) & \" (max 50):\"\n            Input side[i]\n            If side[i] <= 50 And side[i] > 0 Then\n                Assign valid = 1\n            Else\n                Output \"Invalid, try again\"\n            End If\n        End While\n        Assign area[i] = side[i] * side[i]\n        Assign totalArea = totalArea + area[i]\n    End For\n    Assign avgArea = totalArea / 50\n    For i = 0 To 49\n        Output \"Square \" & (i + 1) & \" Area: \" & area[i]\n    End For\n    Output \"Average Area: \" & avgArea\nEnd"
            },
            {
                "problem": "รับข้อมูลเงินค่าขนมและเพศของนักเรียน 100 คน จงหาค่าขนมที่มากที่สุดและน้อยที่สุดพร้อมระบุเพศ และหาค่าเฉลี่ย",
                "solution": "Function Main\n    Declare Real money[100]\n    Declare String gender[100]\n    Declare Real maxMoney, minMoney, totalMoney, avgMoney\n    Declare String maxGender, minGender\n    Declare Integer i\n    \n    Assign totalMoney = 0\n    For i = 0 To 99\n        Output \"Enter allowance for student \" & (i + 1) & \":\"\n        Input money[i]\n        Output \"Enter gender (M/F) for student \" & (i + 1) & \":\"\n        Input gender[i]\n        \n        If i == 0 Then\n            Assign maxMoney = money[i]\n            Assign maxGender = gender[i]\n            Assign minMoney = money[i]\n            Assign minGender = gender[i]\n        Else\n            If money[i] > maxMoney Then\n                Assign maxMoney = money[i]\n                Assign maxGender = gender[i]\n            End If\n            If money[i] < minMoney Then\n                Assign minMoney = money[i]\n                Assign minGender = gender[i]\n            End If\n        End If\n        Assign totalMoney = totalMoney + money[i]\n    End For\n    \n    Assign avgMoney = totalMoney / 100\n    Output \"Max Allowance: \" & maxMoney & \" Gender: \" & maxGender\n    Output \"Min Allowance: \" & minMoney & \" Gender: \" & minGender\n    Output \"Average Allowance: \" & avgMoney\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode คำนวณค่าล่วงเวลา (OT) ของพนักงาน 100 คน (ทำได้สูงสุด 4 ครั้ง/เดือน, สูงสุด 6 ชม./วัน, อัตรา 200 บาท/ชม.)",
                "solution": "Function Main\n    Declare Real ot[100][4], pay[100]\n    Declare Real totalPay\n    Declare Integer i, j\n    Declare Integer valid\n    \n    Assign totalPay = 0\n    For i = 0 To 99\n        Assign pay[i] = 0\n        For j = 0 To 3\n            Assign valid = 0\n            While valid == 0\n                Output \"Enter OT hrs for employee \" & (i + 1) & \" week \" & (j + 1) & \" (max 6):\"\n                Input ot[i][j]\n                If ot[i][j] >= 0 And ot[i][j] <= 6 Then\n                    Assign valid = 1\n                Else\n                    Output \"Invalid, try again\"\n                End If\n            End While\n            Assign pay[i] = pay[i] + (ot[i][j] * 200)\n        End For\n        Assign totalPay = totalPay + pay[i]\n    End For\n    \n    For i = 0 To 99\n        Output \"Employee \" & (i + 1) & \" Total Pay: \" & pay[i]\n    End For\n    Output \"Grand Total Pay: \" & totalPay\nEnd"
            }
        ]
    },
    {
        "year": "2565",
        "name": "การสอบซ่อมภาค 2 ปี 2565",
        "questions": [
            {
                "problem": "จงเขียน Pseudocode เพื่อเปรียบเทียบความสูงของนักศึกษา 2 คน (ความสูงระหว่าง 150-195 ซม.) ว่าใครสูงกว่ากัน",
                "solution": "Function Main\n    Declare Real h[2]\n    Declare Integer i\n    Declare Integer valid\n    For i = 0 To 1\n        Assign valid = 0\n        While valid == 0\n            Output \"Enter height for student \" & (i + 1) & \" (150-195):\"\n            Input h[i]\n            If h[i] >= 150 And h[i] <= 195 Then\n                Assign valid = 1\n            Else\n                Output \"Invalid, try again\"\n            End If\n        End While\n    End For\n    If h[0] > h[1] Then\n        Output \"Student 1 is taller than Student 2\"\n    Else\n        If h[0] < h[1] Then\n            Output \"Student 2 is taller than Student 1\"\n        Else\n            Output \"Student 1 and Student 2 are of equal height\"\n        End If\n    End If\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode คำนวณคะแนนรวม (สอบเต็ม 25, รายงานเต็ม 15, การบ้านเต็ม 10) ของนักศึกษา N คน",
                "solution": "Function Main\n    Declare Integer n, i\n    Declare Real exam, report, hw, total\n    Declare Integer valid\n    Output \"Enter number of students:\"\n    Input n\n    For i = 1 To n\n        Assign valid = 0\n        While valid == 0\n            Output \"Enter exam score (0-25):\"\n            Input exam\n            Output \"Enter report score (0-15):\"\n            Input report\n            Output \"Enter HW+Attendance score (0-10):\"\n            Input hw\n            If (exam >= 0 And exam <= 25) And (report >= 0 And report <= 15) And (hw >= 0 And hw <= 10) Then\n                Assign valid = 1\n            Else\n                Output \"Invalid, try again\"\n            End If\n        End While\n        Assign total = exam + report + hw\n        Output \"Student \" & i & \" Total Score: \" & total\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode คำนวณการหักเงินกู้พนักงาน 100 คน: เงินต้น <= 50,000 บาท โดยหัก 20% ของเงินต้น",
                "solution": "Function Main\n    Declare Real AAA[100][2]\n    Declare Real sumP, sumD, sumAll\n    Declare Integer i\n    Declare Integer valid\n    Assign sumP = 0\n    Assign sumD = 0\n    For i = 0 To 99\n        Assign valid = 0\n        While valid == 0\n            Output \"Enter principal (max 50000) for emp \" & (i + 1) & \":\"\n            Input AAA[i][0]\n            If AAA[i][0] >= 0 And AAA[i][0] <= 50000 Then\n                Assign valid = 1\n            Else\n                Output \"Invalid, try again\"\n            End If\n        End While\n        Assign AAA[i][1] = AAA[i][0] * 0.2\n        Assign sumP = sumP + AAA[i][0]\n        Assign sumD = sumD + AAA[i][1]\n    End For\n    Assign sumAll = sumP + sumD\n    Output \"Total Principal: \" & sumP\n    Output \"Total Deducted: \" & sumD\n    Output \"Grand Total: \" & sumAll\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode ทำการลบค่าในอาร์เรย์ C = A - B (ข้อมูลระหว่าง 1000-5999 และ A ต้องมากกว่า B เสมอ)",
                "solution": "Function Main\n    Declare Real A[3][2], B[3][2], C[3][2]\n    Declare Integer i, j\n    Declare Integer valid\n    For i = 0 To 2\n        For j = 0 To 1\n            Assign valid = 0\n            While valid == 0\n                Output \"Enter A[\" & i & \"][\" & j & \"] (1000-5999):\"\n                Input A[i][j]\n                Output \"Enter B[\" & i & \"][\" & j & \"] (1000-5999, < A):\"\n                Input B[i][j]\n                If (A[i][j] >= 1000 And A[i][j] <= 5999) And (B[i][j] >= 1000 And B[i][j] <= 5999) And (A[i][j] > B[i][j]) Then\n                    Assign valid = 1\n                Else\n                    Output \"Invalid, try again\"\n                End If\n            End While\n            Assign C[i][j] = A[i][j] - B[i][j]\n            Output \"C[\" & i & \"][\" & j & \"] = \" & C[i][j]\n        End For\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode ประมวลผลคะแนนของนักศึกษา 400 คนใน 4 ชั้นปี แสดงคะแนนสูงสุด/ต่ำสุดของแต่ละชั้นปี และค่าเฉลี่ยรวมทั้งหมด",
                "solution": "Function Main\n    Declare Integer yr[400], count[4]\n    Declare Real score[400], maxScore[4], minScore[4]\n    Declare Real totalAll, avgAll\n    Declare Integer i, yIdx\n    Declare Integer valid\n    \n    For i = 0 To 3\n        Assign maxScore[i] = -1\n        Assign minScore[i] = 999999\n        Assign count[i] = 0\n    End For\n    \n    Assign totalAll = 0\n    For i = 0 To 399\n        Assign valid = 0\n        While valid == 0\n            Output \"Enter year (1-4) for student \" & (i + 1) & \":\"\n            Input yr[i]\n            Output \"Enter score:\"\n            Input score[i]\n            If yr[i] >= 1 And yr[i] <= 4 And score[i] >= 0 Then\n                Assign valid = 1\n            Else\n                Output \"Invalid, try again\"\n            End If\n        End While\n        \n        Assign yIdx = yr[i] - 1\n        If score[i] > maxScore[yIdx] Then\n            Assign maxScore[yIdx] = score[i]\n        End If\n        If score[i] < minScore[yIdx] Then\n            Assign minScore[yIdx] = score[i]\n        End If\n        Assign count[yIdx] = count[yIdx] + 1\n        Assign totalAll = totalAll + score[i]\n    End For\n    \n    For i = 0 To 3\n        If count[i] > 0 Then\n            Output \"Year \" & (i + 1) & \" Max: \" & maxScore[i] & \" Min: \" & minScore[i]\n        End If\n    End For\n    Assign avgAll = totalAll / 400\n    Output \"Overall Average: \" & avgAll\nEnd"
            }
        ]
    },
    {
        "year": "2565",
        "name": "การสอบภาค 1 ปี 2565",
        "questions": [
            {
                "problem": "รับและแสดงผลชื่อและนามสกุลของนักเรียน 40 คน",
                "solution": "Function Main\n    Declare String fname[40], lname[40]\n    Declare Integer i\n    For i = 0 To 39\n        Output \"Enter first name for student \" & (i + 1) & \":\"\n        Input fname[i]\n        Output \"Enter last name for student \" & (i + 1) & \":\"\n        Input lname[i]\n    End For\n    For i = 0 To 39\n        Output \"Student \" & (i + 1) & \": \" & fname[i] & \" \" & lname[i]\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode แปลงความยาวจากเซนติเมตร (<= 10000 ซม.) เป็นเมตร",
                "solution": "Function Main\n    Declare Integer cm\n    Declare Real m\n    Declare Integer valid\n    Assign valid = 0\n    While valid == 0\n        Output \"Enter length in cm (<= 10000):\"\n        Input cm\n        If cm >= 0 And cm <= 10000 Then\n            Assign valid = 1\n        Else\n            Output \"Invalid, try again\"\n        End If\n    End While\n    Assign m = cm / 100\n    Output cm & \" cm = \" & m & \" meters\"\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode แสดงสูตรคูณของตัวเลขจำนวนเต็ม 1 จำนวน (ค่า > 20 และ <= 100)",
                "solution": "Function Main\n    Declare Integer num, i\n    Declare Integer valid\n    Assign valid = 0\n    While valid == 0\n        Output \"Enter integer (> 20 and <= 100):\"\n        Input num\n        If num > 20 And num <= 100 Then\n            Assign valid = 1\n        Else\n            Output \"Invalid, try again\"\n        End If\n    End While\n    Output \"Multiplication Table for \" & num\n    For i = 1 To 12\n        Output num & \" x \" & i & \" = \" & (num * i)\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode คำนวณส่วนลด (ลด 10% ถ้ายอดซื้อ > 10,000 บาท) จากการซื้อสินค้า A และ B",
                "solution": "Function Main\n    Declare Integer qtyA, qtyB\n    Declare Real priceA, priceB, totalA, totalB, totalBefore, discount, finalPay\n    Declare Integer valid\n    \n    Assign priceA = 200\n    Assign priceB = 95.75\n    \n    Assign valid = 0\n    While valid == 0\n        Output \"Enter quantity of A (max 100):\"\n        Input qtyA\n        If qtyA >= 0 And qtyA <= 100 Then\n            Assign valid = 1\n        Else\n            Output \"Invalid, try again\"\n        End If\n    End While\n    \n    Assign valid = 0\n    While valid == 0\n        Output \"Enter quantity of B (max 150):\"\n        Input qtyB\n        If qtyB >= 0 And qtyB <= 150 Then\n            Assign valid = 1\n        Else\n            Output \"Invalid, try again\"\n        End If\n    End While\n    \n    Assign totalA = qtyA * priceA\n    Assign totalB = qtyB * priceB\n    Assign totalBefore = totalA + totalB\n    \n    If totalBefore > 10000 Then\n        Assign discount = totalBefore * 0.10\n    Else\n        Assign discount = 0\n    End If\n    \n    Assign finalPay = totalBefore - discount\n    \n    Output \"Item A = \" & qtyA & \" units, Total = \" & totalA & \" baht\"\n    Output \"Item B = \" & qtyB & \" units, Total = \" & totalB & \" baht\"\n    Output \"Total before discount = \" & totalBefore & \" baht, Discount = \" & discount & \" baht\"\n    Output \"Final Payment = \" & finalPay & \" baht\"\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode ตัดสินผลสอบนักศึกษา 380 คน ว่าผ่านหรือตก (<50 คือตก) โดยเก็บข้อมูลการสอบ 2 ครั้งในอาร์เรย์ 2 มิติ",
                "solution": "Function Main\n    Declare Real scores[380][2], total[380]\n    Declare String status[380]\n    Declare Real maxPass, minPass, maxFail, minFail, sumAll, avgAll\n    Declare Integer i, passCount, failCount\n    Declare Integer valid\n    \n    Assign maxPass = -1\n    Assign minPass = 101\n    Assign maxFail = -1\n    Assign minFail = 101\n    Assign sumAll = 0\n    Assign passCount = 0\n    Assign failCount = 0\n    \n    For i = 0 To 379\n        Assign valid = 0\n        While valid == 0\n            Output \"Enter exam 1 (0-50) for student \" & (i + 1) & \":\"\n            Input scores[i][0]\n            Output \"Enter exam 2 (0-50) for student \" & (i + 1) & \":\"\n            Input scores[i][1]\n            If scores[i][0] >= 0 And scores[i][0] <= 50 And scores[i][1] >= 0 And scores[i][1] <= 50 Then\n                Assign valid = 1\n            Else\n                Output \"Invalid, try again\"\n            End If\n        End While\n        \n        Assign total[i] = scores[i][0] + scores[i][1]\n        Assign sumAll = sumAll + total[i]\n        \n        If total[i] >= 50 Then\n            Assign status[i] = \"Pass\"\n            Assign passCount = passCount + 1\n            If total[i] > maxPass Then\n                Assign maxPass = total[i]\n            End If\n            If total[i] < minPass Then\n                Assign minPass = total[i]\n            End If\n        Else\n            Assign status[i] = \"Fail\"\n            Assign failCount = failCount + 1\n            If total[i] > maxFail Then\n                Assign maxFail = total[i]\n            End If\n            If total[i] < minFail Then\n                Assign minFail = total[i]\n            End If\n        End If\n    End For\n    \n    For i = 0 To 379\n        Output \"Student \" & (i + 1) & \" Total = \" & total[i] & \" Status: \" & status[i]\n    End For\n    \n    If passCount > 0 Then\n        Output \"Max Pass: \" & maxPass\n        Output \"Min Pass: \" & minPass\n    End If\n    If failCount > 0 Then\n        Output \"Max Fail: \" & maxFail\n        Output \"Min Fail: \" & minFail\n    End If\n    Assign avgAll = sumAll / 380\n    Output \"Average of Subject: \" & avgAll\nEnd"
            }
        ]
    },
    {
        "year": "2565",
        "name": "การสอบภาค 2 ปี 2565",
        "questions": [
            {
                "problem": "จงเขียน Pseudocode รับค่าอายุนักเรียน 6-12 ปี จำนวน 105 คน เก็บลงในอาร์เรย์ 1 มิติ",
                "solution": "Function Main\n    Declare Integer age[105]\n    Declare Integer i\n    Declare Integer valid\n    For i = 0 To 104\n        Assign valid = 0\n        While valid == 0\n            Output \"Enter age (6-12) for student \" & (i + 1) & \":\"\n            Input age[i]\n            If age[i] >= 6 And age[i] <= 12 Then\n                Assign valid = 1\n            Else\n                Output \"Invalid, try again\"\n            End If\n        End While\n    End For\n    For i = 0 To 104\n        Output \"Student \" & (i + 1) & \" Age: \" & age[i]\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode แปลงความสูงจากเซนติเมตร (ต้องเป็นค่าบวก) เป็นเมตร สำหรับคน N คน",
                "solution": "Function Main\n    Declare Integer n, i, cm\n    Declare Real m\n    Declare Integer valid\n    Output \"Enter number of people:\"\n    Input n\n    For i = 1 To n\n        Assign valid = 0\n        While valid == 0\n            Output \"Enter length in cm (positive int) for person \" & i & \":\"\n            Input cm\n            If cm > 0 Then\n                Assign valid = 1\n            Else\n                Output \"Invalid, try again\"\n            End If\n        End While\n        Assign m = cm / 100\n        Output cm & \" cm = \" & m & \" meters\"\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode คำนวณเกรดจากคะแนนสอบกลางภาค (40) และปลายภาค (60) ของนักศึกษา 55 คน",
                "solution": "Function Main\n    Declare Real mid[55], final[55], total[55], sumAll, avgAll\n    Declare String grade[55]\n    Declare Integer i\n    Declare Integer valid\n    \n    Assign sumAll = 0\n    For i = 0 To 54\n        Assign valid = 0\n        While valid == 0\n            Output \"Enter mid score (0-40) for student \" & (i + 1) & \":\"\n            Input mid[i]\n            Output \"Enter final score (0-60) for student \" & (i + 1) & \":\"\n            Input final[i]\n            If mid[i] >= 0 And mid[i] <= 40 And final[i] >= 0 And final[i] <= 60 Then\n                Assign valid = 1\n            Else\n                Output \"Invalid, try again\"\n            End If\n        End While\n        \n        Assign total[i] = mid[i] + final[i]\n        Assign sumAll = sumAll + total[i]\n        \n        If total[i] >= 80 And total[i] <= 100 Then\n            Assign grade[i] = \"A\"\n        Else\n            If total[i] >= 60 And total[i] <= 79 Then\n                Assign grade[i] = \"B\"\n            Else\n                If total[i] >= 40 And total[i] <= 59 Then\n                    Assign grade[i] = \"C\"\n                Else\n                    Assign grade[i] = \"F\"\n                End If\n            End If\n        End If\n    End For\n    \n    For i = 0 To 54\n        Output \"Student \" & (i + 1) & \" Total = \" & total[i] & \" Grade: \" & grade[i]\n    End For\n    Assign avgAll = sumAll / 55\n    Output \"Average Score: \" & avgAll\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode หาผลรวมอาร์เรย์ CC = AA + BB (ค่าแต่ละช่อง <= 50) พร้อมหาค่าสูงสุดและต่ำสุดของอาร์เรย์ CC",
                "solution": "Function Main\n    Declare Real AA[3][3], BB[3][3], CC[3][3]\n    Declare Real maxCC, minCC\n    Declare Integer i, j\n    Declare Integer valid\n    \n    Assign maxCC = -999999\n    Assign minCC = 999999\n    \n    For i = 0 To 2\n        For j = 0 To 2\n            Assign valid = 0\n            While valid == 0\n                Output \"Enter AA[\" & i & \"][\" & j & \"] (<=50):\"\n                Input AA[i][j]\n                Output \"Enter BB[\" & i & \"][\" & j & \"] (<=50):\"\n                Input BB[i][j]\n                If AA[i][j] <= 50 And BB[i][j] <= 50 Then\n                    Assign valid = 1\n                Else\n                    Output \"Invalid, try again\"\n                End If\n            End While\n            \n            Assign CC[i][j] = AA[i][j] + BB[i][j]\n            Output \"CC[\" & i & \"][\" & j & \"] = \" & CC[i][j]\n            \n            If CC[i][j] > maxCC Then\n                Assign maxCC = CC[i][j]\n            End If\n            If CC[i][j] < minCC Then\n                Assign minCC = CC[i][j]\n            End If\n        End For\n    End For\n    \n    Output \"Max of CC = \" & maxCC\n    Output \"Min of CC = \" & minCC\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode รับค่าน้ำหนักพนักงาน 200 คน และแสดงความแตกต่างของน้ำหนัก",
                "solution": "Function Main\n    Declare Real data[200][3]\n    Declare Real sumW1, sumW2, avgW1, avgW2, diff\n    Declare Integer i\n    \n    Assign sumW1 = 0\n    Assign sumW2 = 0\n    \n    For i = 0 To 199\n        Output \"Enter ID for employee \" & (i + 1) & \":\"\n        Input data[i][0]\n        Output \"Enter Weight 1 (Start of year):\"\n        Input data[i][1]\n        Output \"Enter Weight 2 (Mid of year):\"\n        Input data[i][2]\n        \n        Assign sumW1 = sumW1 + data[i][1]\n        Assign sumW2 = sumW2 + data[i][2]\n    End For\n    \n    For i = 0 To 199\n        Assign diff = data[i][2] - data[i][1]\n        If diff > 0 Then\n            Output \"ID \" & data[i][0] & \" W1=\" & data[i][1] & \" W2=\" & data[i][2] & \" Weight increased by \" & diff\n        Else\n            If diff < 0 Then\n                Output \"ID \" & data[i][0] & \" W1=\" & data[i][1] & \" W2=\" & data[i][2] & \" Weight decreased by \" & (-diff)\n            Else\n                Output \"ID \" & data[i][0] & \" W1=\" & data[i][1] & \" W2=\" & data[i][2] & \" Weight unchanged\"\n            End If\n        End If\n    End For\n    \n    Assign avgW1 = sumW1 / 200\n    Assign avgW2 = sumW2 / 200\n    Output \"Average Weight Start of year = \" & avgW1\n    Output \"Average Weight Mid of year = \" & avgW2\nEnd"
            }
        ]
    },
    {
        "year": "2566",
        "name": "การสอบภาค 1 / 2566",
        "questions": [
            {
                "problem": "รับข้อมูลนักศึกษารามคำแหงทุกชั้นปีที่ลงทะเบียนเรียนวิชา COS1103 จำนวน 420 คน เก็บใน Array 2 มิติ ประกอบด้วย รหัสนักศึกษา เพศ และคะแนนสอบปลายภาคเต็ม 100 คะแนน แล้วแสดงรหัสนักศึกษาและคะแนนสอบของทุกคน",
                "solution": "Function Main\nDeclare Integer i\nDeclare String ID\nDeclare String Gender\nDeclare Integer Score\nDeclare String Student[420][3]\n\nFor i = 1 To 420\n    Input ID\n    Input Gender\n    Input Score\n    Assign Student[i - 1][0] = ID\n    Assign Student[i - 1][1] = Gender\n    Assign Student[i - 1][2] = Score\nEnd For\n\nFor i = 1 To 420\n    Output Student[i - 1][0]\n    Output Student[i - 1][2]\nEnd For\nEnd"
            },
            {
                "problem": "คำนวณหาพื้นที่สี่เหลี่ยมผืนผ้าตามจำนวนที่ผู้ใช้ต้องการ โดยแต่ละด้านไม่เกิน 100 เมตร",
                "solution": "Function Main\nDeclare Integer count, choice, width, height, area\nAssign count = 0\nAssign choice = 1\n\nWhile choice == 1\n    Input width\n    Input height\n    If width <= 100 And height <= 100 Then\n        Assign area = width * height\n        Output area\n        Assign count = count + 1\n    Else\n        Output \"Invalid dimensions\"\n    End If\n    Output \"Choose 1 to continue, 2 to stop:\"\n    Input choice\nEnd While\n\nOutput count\nEnd"
            },
            {
                "problem": "แปลงหน่วยวัดจากหน่วยเมตรไปเป็นหน่วยนิ้ว (12 นิ้ว = 30 ซม. -> 1 นิ้ว = 2.5 ซม.)",
                "solution": "Function Main\nDeclare Integer meters, cm\nDeclare Real inches\nInput meters\nAssign cm = meters * 100\nAssign inches = cm / 2.5\nOutput inches\nEnd"
            },
            {
                "problem": "จากข้อ 1 ให้สรุปจำนวนนักศึกษาหญิง ชาย รวม, คะแนนสูงสุดและเพศ, คะแนนต่ำสุดและเพศ, และคะแนนเฉลี่ย",
                "solution": "Function Main\nDeclare Integer totalF, totalM, sum, total\nDeclare Integer maxScore, minScore, Score2\nDeclare Real avg\nDeclare String maxGender, minGender, Gender2\nAssign totalF = 0\nAssign totalM = 0\nAssign sum = 0\nAssign maxScore = -1\nAssign minScore = 101\n\nFor i = 1 To 420\n    Assign Gender2 = Student[i - 1][1]\n    Assign Score2 = Student[i - 1][2]\n    \n    If Gender2 == \"F\" Then\n        Assign totalF = totalF + 1\n    Else\n        Assign totalM = totalM + 1\n    End If\n    \n    Assign sum = sum + Score2\n    \n    If Score2 > maxScore Then\n        Assign maxScore = Score2\n        Assign maxGender = Gender2\n    End If\n    If Score2 < minScore Then\n        Assign minScore = Score2\n        Assign minGender = Gender2\n    End If\nEnd For\n\nAssign total = totalF + totalM\nAssign avg = sum / total\n\nOutput totalF\nOutput totalM\nOutput total\nOutput maxScore\nOutput maxGender\nOutput minScore\nOutput minGender\nOutput avg\nEnd"
            },
            {
                "problem": "คำนวณค่าเช่ารายเดือนของห้องเช่าแต่ละห้อง ค่าเช่า 3000, ค่าไฟ 0-50 หน่วยละ 2.50 บาท เกิน 50 คิด 3.50, ค่าน้ำหน่วยละ 2, WiFi ห้องละ 100",
                "solution": "Function Main\nDeclare Integer elecUnits, waterUnits\nDeclare Real rent, elecCost, waterCost, wifiCost, totalCost\nInput elecUnits\nInput waterUnits\nAssign rent = 3000\n\nIf elecUnits <= 50 Then\n    Assign elecCost = elecUnits * 2.50\nElse\n    Assign elecCost = (50 * 2.50) + ((elecUnits - 50) * 3.50)\nEnd If\n\nAssign waterCost = waterUnits * 2\nAssign wifiCost = 100\nAssign totalCost = rent + elecCost + waterCost + wifiCost\n\nOutput totalCost\nEnd"
            }
        ]
    },
    {
        "year": "2566",
        "name": "การสอบภาค 2 / 2566",
        "questions": [
            {
                "problem": "เก็บข้อมูลการซ้อมวิ่ง 100 เมตร ของนักกรีฑาจำนวน 30 คนลงใน array 2 มิติ",
                "solution": "Function Main\nDeclare String AthID\nDeclare Integer weight, height2\nDeclare Real time1, time2, time3, time4\nDeclare String Athlete[30][7]\n\nFor i = 1 To 30\n    Input AthID\n    Input weight\n    Input height2\n    Input time1\n    Input time2\n    Input time3\n    Input time4\n    Assign Athlete[i - 1][0] = AthID\n    Assign Athlete[i - 1][1] = weight\n    Assign Athlete[i - 1][2] = height2\n    Assign Athlete[i - 1][3] = time1\n    Assign Athlete[i - 1][4] = time2\n    Assign Athlete[i - 1][5] = time3\n    Assign Athlete[i - 1][6] = time4\nEnd For\nEnd"
            },
            {
                "problem": "หาค่า X จากสมการ `x = ab² + 2ac + a/c² - √b`",
                "solution": "Function Main\nDeclare Integer a, b, c\nDeclare Real x, term1, term2, term3, term4\nInput a\nInput b\nInput c\nAssign term1 = a * (b * b)\nAssign term2 = 2 * a * c\nAssign term3 = a / (c * c)\nAssign term4 = Math.sqrt(b)  // Approximating sqrt for basic logic, or use Math if available\nAssign x = term1 + term2 + term3 - term4\nOutput x\nEnd"
            },
            {
                "problem": "รับค่าส่วนสูงเป็นเซนติเมตร เพื่อแสดงผลว่าตัวสูงหรือไม่สูง (เกิน 170 ให้แสดงว่า \"ตัวสูง\") วนรับไปเรื่อยๆ จนกว่าผู้ใช้จะหยุด",
                "solution": "Function Main\nDeclare Integer pCount, pHeight\nDeclare String pChoice\nAssign pCount = 0\nAssign pChoice = \"Y\"\n\nWhile pChoice == \"Y\"\n    Input pHeight\n    If pHeight > 170 Then\n        Output \"ตัวสูง\"\n    Else\n        Output \"ไม่สูง\"\n    End If\n    Assign pCount = pCount + 1\n    Output \"Continue? (Y/N)\"\n    Input pChoice\nEnd While\n\nOutput pCount\nEnd"
            },
            {
                "problem": "จากข้อ 1 ให้หาค่าเฉลี่ยของสถิติแต่ละคน, ค่าเฉลี่ยรวม 30 คน, และคนที่วิ่งเร็วที่สุด (เวลาเฉลี่ยน้อยที่สุด)",
                "solution": "Function Main\nDeclare String Athlete[30][7]\nDeclare Real tSum, tAvg, tMinTime, cAvg, totalAvg\nDeclare String minID2, minWeight2, minHeight2\nAssign tSum = 0\nAssign tMinTime = 9999\n\nFor i = 1 To 30\n    Assign AthID = Athlete[i - 1][0]\n    Assign time1 = Athlete[i - 1][3]\n    Assign time2 = Athlete[i - 1][4]\n    Assign time3 = Athlete[i - 1][5]\n    Assign time4 = Athlete[i - 1][6]\n    \n    Assign cAvg = (time1 + time2 + time3 + time4) / 4\n    Output AthID\n    Output cAvg\n    \n    Assign tSum = tSum + cAvg\n    If cAvg < tMinTime Then\n        Assign tMinTime = cAvg\n        Assign minID2 = AthID\n        Assign minWeight2 = Athlete[i - 1][1]\n        Assign minHeight2 = Athlete[i - 1][2]\n    End If\nEnd For\n\nAssign totalAvg = tSum / 30\nOutput totalAvg\nOutput tMinTime\nOutput minID2\nOutput minWeight2\nOutput minHeight2\nEnd"
            },
            {
                "problem": "คำนวณการขายครีมสองขนาด จำกัดไม่เกิน 3 โหลต่อครั้ง ซื้อกระปุกใหญ่เกิน 4 กระปุกได้ส่วนลด 5%",
                "solution": "Function Main\nDeclare Integer smallQty, largeQty, mReceived\nDeclare Real smallTotal, largeTotal, discount, netPrice, change\nInput smallQty\nInput largeQty\nInput mReceived\n\nIf smallQty <= 36 And largeQty <= 36 Then\n    Assign smallTotal = smallQty * 290\n    Assign largeTotal = largeQty * 500\n    If largeQty > 4 Then\n        Assign discount = largeTotal * 0.05\n    Else\n        Assign discount = 0\n    End If\n    \n    Assign netPrice = smallTotal + largeTotal - discount\n    Assign change = mReceived - netPrice\n    \n    Output smallQty\n    Output smallTotal\n    Output largeQty\n    Output largeTotal\n    Output discount\n    Output netPrice\n    Output mReceived\n    Output change\nElse\n    Output \"Exceeded limits\"\nEnd If\nEnd"
            }
        ]
    },
    {
        "year": "2566",
        "name": "การสอบซ่อมภาค 1 / 2566",
        "questions": [
            {
                "problem": "เก็บข้อมูลลงใน Array 2 มิติ เพื่อใช้ในการคำนวณพื้นที่สี่เหลี่ยมผืนผ้า 50 ผืน (ขนาดไม่เกิน 10 เมตร)",
                "solution": "Function Main\nDeclare Integer w, l\nDeclare Integer Rect[50][2]\n\nFor i = 1 To 50\n    Input w\n    Input l\n    If w <= 10 And l <= 10 Then\n        Assign Rect[i - 1][0] = w\n        Assign Rect[i - 1][1] = l\n    End If\nEnd For\nEnd"
            },
            {
                "problem": "ตรวจสอบหน่วยกิตสะสม (ครบ 125 จบ, เกิน 110 ใกล้จบ) โดยวนซ้ำไปเรื่อยๆ ตามจำนวนที่ต้องการ",
                "solution": "Function Main\nDeclare Integer crCount, credits\nDeclare String crChoice\nAssign crCount = 0\nAssign crChoice = \"Y\"\n\nWhile crChoice == \"Y\"\n    Input credits\n    If credits >= 125 Then\n        Output \"แจ้งจบได้\"\n    Else\n        If credits > 110 Then\n            Output \"ใกล้จบ\"\n        End If\n    End If\n    Assign crCount = crCount + 1\n    Input crChoice\nEnd While\nOutput crCount\nEnd"
            },
            {
                "problem": "คิดค่ารักษามิเตอร์ไฟ 50 บาท, 25 หน่วยแรก 2 บาท, 26-40 หน่วย 2.50 บาท, เกิน 40 หน่วย 3 บาท",
                "solution": "Function Main\nDeclare Integer elUnits\nDeclare Real elCost\nInput elUnits\nAssign elCost = 50\n\nIf elUnits > 0 Then\n    If elUnits <= 25 Then\n        Assign elCost = elCost + (elUnits * 2)\n    Else\n        If elUnits <= 40 Then\n            Assign elCost = elCost + (25 * 2) + ((elUnits - 25) * 2.50)\n        Else\n            Assign elCost = elCost + (25 * 2) + (15 * 2.50) + ((elUnits - 40) * 3)\n        End If\n    End If\nEnd If\nOutput elCost\nEnd"
            },
            {
                "problem": "จากข้อ 1 ให้หาพื้นที่ใหญ่ที่สุดและพื้นที่เล็กที่สุด",
                "solution": "Function Main\nDeclare Integer maxArea, minArea, cArea, maxW, maxL, minW, minL\nAssign maxArea = -1\nAssign minArea = 999\n\nFor i = 1 To 50\n    Assign w = Rect[i - 1][0]\n    Assign l = Rect[i - 1][1]\n    Assign cArea = w * l\n    If cArea > maxArea Then\n        Assign maxArea = cArea\n        Assign maxW = w\n        Assign maxL = l\n    End If\n    If cArea < minArea Then\n        Assign minArea = cArea\n        Assign minW = w\n        Assign minL = l\n    End If\nEnd For\n\nOutput maxArea\nOutput maxW\nOutput maxL\nOutput minArea\nOutput minW\nOutput minL\nEnd"
            },
            {
                "problem": "รับข้อมูลนักศึกษา 50 คน และคะแนนสอบ เพื่อหาค่าเฉลี่ยรวม",
                "solution": "Function Main\nDeclare String sID, sGender\nDeclare Real sMid, sFinal, sSumMid, sSumFinal, sSumTotal\nDeclare String Stu50[50][5]\nAssign sSumMid = 0\nAssign sSumFinal = 0\nAssign sSumTotal = 0\n\nFor i = 1 To 50\n    Input sID\n    Input sGender\n    Input sMid\n    Input sFinal\n    Assign Stu50[i - 1][0] = sID\n    Assign Stu50[i - 1][1] = sGender\n    Assign Stu50[i - 1][2] = sMid\n    Assign Stu50[i - 1][3] = sFinal\n    Assign Stu50[i - 1][4] = sMid + sFinal\nEnd For\n\nFor i = 1 To 50\n    Assign sSumMid = sSumMid + Stu50[i - 1][2]\n    Assign sSumFinal = sSumFinal + Stu50[i - 1][3]\n    Assign sSumTotal = sSumTotal + Stu50[i - 1][4]\nEnd For\n\nOutput sSumMid / 50\nOutput sSumFinal / 50\nOutput sSumTotal / 50\nEnd"
            }
        ]
    },
    {
        "year": "2566",
        "name": "การสอบซ่อมภาค 2 / 2566",
        "questions": [
            {
                "problem": "รับน้ำหนักเป็นกรัม แปลงเป็นกิโลกรัม และแบ่งกลุ่ม (Group B ถ้าน้ำหนัก > 60 กก.)",
                "solution": "Function Main\nDeclare Integer grams\nDeclare Real kg\nInput grams\nAssign kg = grams / 1000\nOutput kg\nIf kg > 60 Then\n    Output \"Group B\"\nElse\n    Output \"Group A\"\nEnd If\nEnd"
            },
            {
                "problem": "หาค่า `Y` จากสมการ `y = ab²ᶜ + 2a/c + a/(c²) - 2√b` พร้อมการตรวจสอบเงื่อนไข a, b, c",
                "solution": "Function Main\nDeclare Integer a2, b2, c2\nDeclare Real y2\nInput a2\nInput c2\nIf a2 > 5 And a2 <= 10 And c2 != 0 And c2 < 10 Then\n    Assign b2 = 10\n    Assign y2 = (a2 * (b2 * b2 * c2)) + ((2 * a2) / c2) + (a2 / (c2 * c2)) - (2 * (b2 * 0.5))\n    Output y2\nEnd If\nEnd"
            },
            {
                "problem": "เก็บข้อมูลพนักงาน 200 คน (ที่มีส่วนสูงระหว่าง 170 ถึง 200) ลงใน array 2 มิติ",
                "solution": "Function Main\nDeclare String empID, empGender\nDeclare Integer empHeight\nDeclare Real empGPA\nDeclare String Emp200[200][4]\n\nFor i = 1 To 200\n    Input empID\n    Input empHeight\n    Input empGender\n    Input empGPA\n    If empHeight > 170 And empHeight <= 200 Then\n        Assign Emp200[i - 1][0] = empID\n        Assign Emp200[i - 1][1] = empHeight\n        Assign Emp200[i - 1][2] = empGender\n        Assign Emp200[i - 1][3] = empGPA\n    End If\nEnd For\n\nFor i = 1 To 200\n    Output Emp200[i - 1][0]\n    Output Emp200[i - 1][1]\n    Output Emp200[i - 1][2]\n    Output Emp200[i - 1][3]\nEnd For\nEnd"
            },
            {
                "problem": "จากข้อ 3 หาระดับความสูงเฉลี่ย คนที่สูงที่สุด และเตี้ยที่สุด",
                "solution": "Function Main\nDeclare Real eSumHeight, eAvgHeight\nDeclare Integer eMaxHeight, eMinHeight\nDeclare String eMaxID, eMaxGender, eMinID, eMinGender\nAssign eSumHeight = 0\nAssign eMaxHeight = -1\nAssign eMinHeight = 999\n\nFor i = 1 To 200\n    Assign empID = Emp200[i - 1][0]\n    Assign empHeight = Emp200[i - 1][1]\n    Assign empGender = Emp200[i - 1][2]\n    Assign eSumHeight = eSumHeight + empHeight\n    If empHeight > eMaxHeight Then\n        Assign eMaxHeight = empHeight\n        Assign eMaxID = empID\n        Assign eMaxGender = empGender\n    End If\n    If empHeight < eMinHeight Then\n        Assign eMinHeight = empHeight\n        Assign eMinID = empID\n        Assign eMinGender = empGender\n    End If\nEnd For\n\nAssign eAvgHeight = eSumHeight / 200\nOutput eAvgHeight\nOutput eMaxID\nOutput eMaxHeight\nOutput eMaxGender\nOutput eMinID\nOutput eMinHeight\nOutput eMinGender\nEnd"
            },
            {
                "problem": "คำนวณค่าเช่าหอพักแบบรายเดือน",
                "solution": "Function Main\nDeclare String roomType\nDeclare Integer rElec, rWater\nDeclare Real rRent, rElecCost, rWaterCost, rCommon, rTotal\nInput roomType\nInput rElec\nInput rWater\n\nIf roomType == \"air\" Then\n    Assign rRent = 3000\nElse\n    Assign rRent = 2000\nEnd If\n\nIf rElec <= 50 Then\n    Assign rElecCost = rElec * 1\nElse\n    Assign rElecCost = (50 * 1) + ((rElec - 50) * 1.50)\nEnd If\n\nAssign rWaterCost = rWater * 5\nAssign rCommon = 100\nAssign rTotal = rRent + rElecCost + rWaterCost + rCommon\nOutput rTotal\nEnd"
            }
        ]
    },
    {
        "year": "2567",
        "name": "การสอบซ่อมภาค 1 / 2567",
        "questions": [
            {
                "problem": "จงเขียน Pseudocode เพื่อรับข้อมูลคะแนนของชั้น ป.6 จำนวน 150 คนของโรงเรียนแห่งหนึ่ง รับข้อมูลจากผู้ใช้งานเพื่อเก็บลงในอาร์เรย์ โดยประกอบด้วยข้อมูล คะแนนสอบกลางภาคเต็ม 70 คะแนน และปลายภาคเต็ม 30 คะแนน (มี 7 วิชา)",
                "solution": "Function Main\n    Declare Integer mid[150][7]\n    Declare Integer final[150][7]\n    Declare Integer i\n    Declare Integer j\n    For i = 0 To 149\n        For j = 0 To 6\n            Input mid[i][j]\n            Input final[i][j]\n        End For\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode รับค่าน้ำหนักหน่วยเป็นกิโลกรัมจาก user เพื่อแสดงผลว่า อ้วนหรือผอม (น้ำหนักเกิน 70 กิโลกรัม ให้แสดงข้อความ \"อ้วน\") กำหนดให้ใช้ loop วนรับข้อมูลทีละคนแบบไม่จำกัดจำนวน จบการทำงานเมื่อผู้ใช้แสดงความต้องการหยุดการทำงานและให้แสดงผลด้วยว่าตรวจสอบข้อมูลไปจำนวนกี่คน",
                "solution": "Function Main\n    Declare Real weight\n    Declare Integer count\n    Declare Integer stop\n    Assign count = 0\n    Assign stop = 0\n    While stop == 0\n        Input weight\n        If weight > 70 Then\n            Output \"อ้วน\"\n        Else\n            Output \"ผอม\"\n        End If\n        Assign count = count + 1\n        Output \"Stop? (1=yes, 0=no)\"\n        Input stop\n    End While\n    Output count\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode เพื่อทำการสำรวจความชอบของลูกค้าที่เข้ามารับประทานอาหารว่าอาหารจานใดคือจานเด็ดประจำร้าน (ได้แก่ แกงส้มกุ้ง, ต้มยำกุ้ง หรือกุ้งซอสมะขาม) ลูกค้าแต่ละคนเลือกตอบได้เพียงชนิดเดียว เมื่อร้านปิดบริการแล้วแสดงผล",
                "solution": "Function Main\n    Declare Integer choice\n    Declare Integer c1\n    Declare Integer c2\n    Declare Integer c3\n    Declare Integer stop\n    Declare Integer total\n    Assign c1 = 0\n    Assign c2 = 0\n    Assign c3 = 0\n    Assign stop = 0\n    While stop == 0\n        Output \"Menu: 1=แกงส้มกุ้ง, 2=ต้มยำกุ้ง, 3=กุ้งซอสมะขาม\"\n        Input choice\n        If choice == 1 Then\n            Assign c1 = c1 + 1\n        End If\n        If choice == 2 Then\n            Assign c2 = c2 + 1\n        End If\n        If choice == 3 Then\n            Assign c3 = c3 + 1\n        End If\n        Output \"Stop? (1=yes, 0=no)\"\n        Input stop\n    End While\n    Assign total = c1 + c2 + c3\n    Output c1\n    Output c2\n    Output c3\n    Output total\nEnd"
            },
            {
                "problem": "ร้านค้าแห่งหนึ่งขายสินค้าเพียง 2 รายการเท่านั้นได้แก่ สินค้า A ราคา ชิ้นละ 250 บาท และสินค้า B ราคาชิ้นละ 90 บาท 75 สตางค์ มีการจำกัดจำนวนให้ลูกค้าซื้อได้ไม่เกิน 100 ชิ้นและ 150 ชิ้นตามลำดับ ลูกค้าที่มียอดการซื้อสินค้าเกิน 20,000 บาท จะได้รับส่วนลดราคา 3 เปอร์เซ็นต์ จงเขียน Pseudocode เพื่อคำนวณราคาของสินค้าแต่ละชนิด, ยอดการซื้อสินค้าก่อนรับส่วนลดราคา, ส่วนลดราคา และยอดการชำระเงิน",
                "solution": "Function Main\n    Declare Integer qA\n    Declare Integer qB\n    Declare Real pA\n    Declare Real pB\n    Declare Real totalA\n    Declare Real totalB\n    Declare Real subTotal\n    Declare Real discount\n    Declare Real net\n    Assign pA = 250.0\n    Assign pB = 90.75\n    Input qA\n    Input qB\n    If qA > 100 Then\n        Assign qA = 100\n    End If\n    If qB > 150 Then\n        Assign qB = 150\n    End If\n    Assign totalA = qA * pA\n    Assign totalB = qB * pB\n    Assign subTotal = totalA + totalB\n    Assign discount = 0.0\n    If subTotal > 20000 Then\n        Assign discount = subTotal * 0.03\n    End If\n    Assign net = subTotal - discount\n    Output totalA\n    Output totalB\n    Output subTotal\n    Output discount\n    Output net\nEnd"
            },
            {
                "problem": "วิชาหนึ่งมีนักศึกษาลงทะเบียนเรียน 120 คน มีการสอบ 2 ครั้ง (40 คะแนนและ 60 คะแนนตามลำดับ) การตัดเกรดคิดจากคะแนนรวม ผลสอบมีเพียงสอบตกหรือสอบผ่าน คนที่ได้คะแนนรวมต่ำกว่า 50 คือสอบตก จงเขียน pseudocode เพื่อรับข้อมูลดังกล่าวจาก user เก็บในอาร์เรย์ 2 มิติ ให้ครบทุกคนก่อนหลังจากนั้นให้แสดงผล",
                "solution": "Function Main\n    Declare Integer scores[120][2]\n    Declare Integer i\n    Declare Integer total\n    Declare Integer passCount\n    Declare Integer failCount\n    Declare Integer maxFail\n    Declare Integer minFail\n    Declare Integer maxPass\n    Declare Integer minPass\n    Declare Real sumTotal\n    Declare Real avg\n    Assign passCount = 0\n    Assign failCount = 0\n    Assign sumTotal = 0.0\n    Assign maxFail = -1\n    Assign minFail = 999\n    Assign maxPass = -1\n    Assign minPass = 999\n\n    For i = 0 To 119\n        Input scores[i][0]\n        Input scores[i][1]\n    End For\n\n    For i = 0 To 119\n        Assign total = scores[i][0] + scores[i][1]\n        Assign sumTotal = sumTotal + total\n        If total < 50 Then\n            Assign failCount = failCount + 1\n            If total > maxFail Then\n                Assign maxFail = total\n            End If\n            If total < minFail Then\n                Assign minFail = total\n            End If\n        Else\n            Assign passCount = passCount + 1\n            If total > maxPass Then\n                Assign maxPass = total\n            End If\n            If total < minPass Then\n                Assign minPass = total\n            End If\n        End If\n    End For\n    Assign avg = sumTotal / 120.0\n    Output maxFail\n    Output minFail\n    Output maxPass\n    Output minPass\n    Output avg\nEnd"
            }
        ]
    },
    {
        "year": "2567",
        "name": "การสอบซ่อมภาค 2 / 2567",
        "questions": [
            {
                "problem": "จงเขียน Pseudocode เพื่อคำนวณหาค่าเช่าห้องพักรายเดือนของหอพักแห่งหนึ่งว่าผู้เช่าต้องชำระเงินรายเดือนรวมแล้วเท่าใด สิ่งที่ผู้เช่าต้องชำระเงิน ได้แก่ ค่าเช่าห้อง (มีตั้งแต่ราคา 2,500 – 5,500 บาท), ค่าไฟหน่วยละ 0.5 บาท, ค่าน้ำเหมาจ่ายเดือนละ 200 บาท และค่า wifi ใช้ฟรี",
                "solution": "Function Main\n    Declare Real room\n    Declare Real elec_units\n    Declare Real elec_cost\n    Declare Real total\n    Input room\n    Input elec_units\n    Assign elec_cost = elec_units * 0.5\n    Assign total = room + elec_cost + 200.0\n    Output total\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode รับตัวเลขไม่เกินหลักพัน 500 จำนวนเก็บใน Array 1 มิติ เมื่อเก็บครบทุกจำนวนแล้ว ให้แสดงผลที่จอภาพทุกจำนวน",
                "solution": "Function Main\n    Declare Integer arr[500]\n    Declare Integer i\n    For i = 0 To 499\n        Input arr[i]\n    End For\n    For i = 0 To 499\n        Output arr[i]\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode ตรวจสอบข้อมูลนักเรียนว่าสอบผ่านหรือไม่ โดยให้ผู้ใช้งานป้อนรหัสนักเรียน จำนวน 5 หลัก ป้อนคะแนนสอบซึ่งมีคะแนนเต็ม 100 คะแนน รหัสนักเรียน 2 หลักแรกเป็นรหัสปีการศึกษา โดยรหัสที่ขึ้นต้นด้วย 67 ต้องสอบได้เกิน 70 คะแนนจึงสอบผ่าน และรหัสที่ขึ้นต้นด้วย 68 ต้องสอบได้เกิน 80 คะแนนจึงสอบผ่าน ส่วนรหัสปีการศึกษาอื่นๆ ไม่สามารถตรวจสอบได้",
                "solution": "Function Main\n    Declare Integer id\n    Declare Integer score\n    Declare Integer year\n    Input id\n    Input score\n    Assign year = id / 1000\n    If year == 67 Then\n        If score > 70 Then\n            Output \"สอบผ่าน\"\n        Else\n            Output \"สอบไม่ผ่าน\"\n        End If\n    End If\n    If year == 68 Then\n        If score > 80 Then\n            Output \"สอบผ่าน\"\n        Else\n            Output \"สอบไม่ผ่าน\"\n        End If\n    End If\n    If year <> 67 Then\n        If year <> 68 Then\n            Output \"ไม่สามารถตรวจสอบได้\"\n        End If\n    End If\nEnd"
            },
            {
                "problem": "จากโจทย์ในข้อ 2 เมื่อเก็บทุกจำนวนครบถ้วนแล้ว จงเขียน Pseudocode เพื่อหาจำนวนที่มากที่สุด, จำนวนที่น้อยที่สุด และค่าเฉลี่ย",
                "solution": "Function Main\n    Declare Integer arr[500]\n    Declare Integer i\n    Declare Integer max\n    Declare Integer min\n    Declare Real sum\n    Declare Real avg\n    Assign sum = 0.0\n    Assign max = -99999\n    Assign min = 99999\n    For i = 0 To 499\n        Input arr[i]\n        Assign sum = sum + arr[i]\n        If arr[i] > max Then\n            Assign max = arr[i]\n        End If\n        If arr[i] < min Then\n            Assign min = arr[i]\n        End If\n    End For\n    Assign avg = sum / 500.0\n    Output max\n    Output min\n    Output avg\nEnd"
            },
            {
                "problem": "จงเขียน pseudocode เพื่อเก็บข้อมูลยอดขายรายเดือนทุกสาขาในปีพ.ศ. 2567 ของร้านสะดวกซื้อบีบี ซึ่งมีสาขาทั่วประเทศ 50 สาขาลงใน Array 2 มิติ แล้วแสดงผลลัพธ์ที่จอภาพ ดังนี้",
                "solution": "Function Main\n    Declare Real sales[12][50]\n    Declare Integer m\n    Declare Integer s\n    Declare Real monthly_total\n    Declare Real yearly_total\n    Assign yearly_total = 0.0\n    For m = 0 To 11\n        For s = 0 To 49\n            Input sales[m][s]\n        End For\n    End For\n    For m = 0 To 11\n        Assign monthly_total = 0.0\n        For s = 0 To 49\n            Output sales[m][s]\n            Assign monthly_total = monthly_total + sales[m][s]\n        End For\n        Output monthly_total\n        Assign yearly_total = yearly_total + monthly_total\n    End For\n    Output yearly_total\nEnd"
            }
        ]
    },
    {
        "year": "2567",
        "name": "การสอบภาค 1 / 2567",
        "questions": [
            {
                "problem": "จงเขียน Pseudocode รับข้อมูลรหัสบุคคลเป็นตัวเลขสามหลัก, ส่วนสูง (150 ซ.ม. - 195 ซ.ม.), น้ำหนัก (เกิน 50 กก. แต่ไม่เกิน 90 กก.) และเพศ ของนักกรีฑา 457 คน เก็บลงใน Array 2 มิติ และแสดงข้อมูลของทุกคน",
                "solution": "Function Main\n    Declare Integer data[457][4]\n    Declare Integer i\n    For i = 0 To 456\n        Input data[i][0]\n        Input data[i][1]\n        Input data[i][2]\n        Input data[i][3]\n    End For\n    For i = 0 To 456\n        Output data[i][0]\n        Output data[i][1]\n        Output data[i][2]\n        Output data[i][3]\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode เพื่อรับค่าตัวเลขหลักสิบ 2 จำนวน แล้วแสดงผลลัพธ์การเปรียบเทียบว่าจำนวนใดมากกว่า",
                "solution": "Function Main\n    Declare Integer a\n    Declare Integer b\n    Input a\n    Input b\n    If a > b Then\n        Output a\n    Else\n        If b > a Then\n            Output b\n        Else\n            Output \"Equal\"\n        End If\n    End If\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode เพื่อทำการสำรวจความพึงพอใจของลูกค้าที่ร้านค้าแห่งหนึ่ง โดยความพึงพอใจมี 3 ระดับ ได้แก่ ต้องปรับปรุง, พอใจ และประทับใจมาก จะหยุดการสำรวจเมื่อพนักงานปิดระบบการสำรวจ แล้วให้แสดงผลลัพธ์",
                "solution": "Function Main\n    Declare Integer choice\n    Declare Integer c1\n    Declare Integer c2\n    Declare Integer c3\n    Declare Integer stop\n    Declare Integer total\n    Assign c1 = 0\n    Assign c2 = 0\n    Assign c3 = 0\n    Assign stop = 0\n    While stop == 0\n        Input choice\n        If choice == 1 Then\n            Assign c1 = c1 + 1\n        End If\n        If choice == 2 Then\n            Assign c2 = c2 + 1\n        End If\n        If choice == 3 Then\n            Assign c3 = c3 + 1\n        End If\n        Input stop\n    End While\n    Assign total = c1 + c2 + c3\n    Output c1\n    Output c2\n    Output c3\n    Output total\nEnd"
            },
            {
                "problem": "จากโจทย์ที่แสดงในข้อ 1 จงเขียน Pseudocode แสดงผลลัพธ์ตามที่กำหนด ดังนี้ นักกรีฑาที่สูงที่สุด..., เตี้ยที่สุด..., ค่าเฉลี่ยความสูงหญิง, ค่าเฉลี่ยความสูงชาย, ค่าเฉลี่ยความสูงทั้งสองเพศ",
                "solution": "Function Main\n    Declare Integer data[457][4]\n    Declare Integer i\n    Declare Integer maxH\n    Declare Integer maxId\n    Declare Integer maxG\n    Declare Integer minH\n    Declare Integer minId\n    Declare Integer minG\n    Declare Integer fCount\n    Declare Integer mCount\n    Declare Real fSum\n    Declare Real mSum\n    Declare Real diff\n    \n    Assign maxH = -1\n    Assign minH = 999\n    Assign fCount = 0\n    Assign mCount = 0\n    Assign fSum = 0.0\n    Assign mSum = 0.0\n\n    For i = 0 To 456\n        Input data[i][0]\n        Input data[i][1]\n        Input data[i][2]\n        Input data[i][3]\n        If data[i][1] > maxH Then\n            Assign maxH = data[i][1]\n            Assign maxId = data[i][0]\n            Assign maxG = data[i][3]\n        End If\n        If data[i][1] < minH Then\n            Assign minH = data[i][1]\n            Assign minId = data[i][0]\n            Assign minG = data[i][3]\n        End If\n        If data[i][3] == 2 Then\n            Assign fCount = fCount + 1\n            Assign fSum = fSum + data[i][1]\n        Else\n            Assign mCount = mCount + 1\n            Assign mSum = mSum + data[i][1]\n        End If\n    End For\n    \n    Output maxId\n    Output maxH\n    Output maxG\n    Output minId\n    Output minH\n    Output minG\n    Output fSum / fCount\n    Output mSum / mCount\n    Assign diff = (fSum / fCount) - (mSum / mCount)\n    If diff < 0 Then\n        Assign diff = diff * -1\n    End If\n    Output diff\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode เพื่อรับข้อมูลค่าใช้จ่ายของร้านค้าแห่งหนึ่งในเดือนตุลาคม 2567 เก็บเป็นรายสัปดาห์ มี 5 สัปดาห์ ค่าใช้จ่ายต่อสัปดาห์เป็นหลักหมื่น ร้านค้าแห่งนี้มี 10 สาขา หลังจากนั้นให้แสดงผลลัพธ์",
                "solution": "Function Main\n    Declare Real cost[10][5]\n    Declare Integer branch\n    Declare Integer week\n    Declare Real bTotal\n    Declare Real wTotal\n    Declare Real allTotal\n    \n    Assign allTotal = 0.0\n    For branch = 0 To 9\n        For week = 0 To 4\n            Input cost[branch][week]\n            Assign allTotal = allTotal + cost[branch][week]\n        End For\n    End For\n\n    For branch = 0 To 9\n        Assign bTotal = 0.0\n        For week = 0 To 4\n            Assign bTotal = bTotal + cost[branch][week]\n        End For\n        Output bTotal\n    End For\n\n    For week = 0 To 4\n        Assign wTotal = 0.0\n        For branch = 0 To 9\n            Assign wTotal = wTotal + cost[branch][week]\n        End For\n        Output wTotal\n    End For\n\n    Output allTotal\nEnd"
            }
        ]
    },
    {
        "year": "2567",
        "name": "การสอบภาค 2 / 2567",
        "questions": [
            {
                "problem": "จงเขียน Pseudocode รับข้อมูลชื่อ-นามสกุลของนักศึกษาจำนวน 195 คน เก็บลงใน Array ชื่อ Name หลังจากนั้นให้แสดงข้อมูลที่เก็บทางจอภาพ",
                "solution": "Function Main\n    Declare String Name[195]\n    Declare Integer i\n    For i = 0 To 194\n        Input Name[i]\n    End For\n    For i = 0 To 194\n        Output Name[i]\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode เพื่อรับข้อมูลคะแนนของนักศึกษา ได้แก่ คะแนนสอบ (เต็ม 70 คะแนน) และคะแนนรายงาน (เต็ม 30 คะแนน) หากคะแนนรวมเกิน 60 ให้แสดงข้อความ “สอบผ่าน”",
                "solution": "Function Main\n    Declare Integer exam\n    Declare Integer report\n    Declare Integer total\n    Input exam\n    Input report\n    Assign total = exam + report\n    If total > 60 Then\n        Output \"สอบผ่าน\"\n    End If\nEnd"
            },
            {
                "problem": "บริษัทแห่งหนึ่งมีพนักงาน 650 คน จงเขียน Pseudocode เพื่อรับค่ารหัสพนักงาน (เป็นตัวเลขหลักร้อย), เพศ, อายุ (23 – 55 ปี), ส่วนสูง และน้ำหนัก แล้วแสดงผลลัพธ์ ส่วนสูงเฉลี่ย ช/ญ, น้ำหนักเฉลี่ย ช/ญ, อายุเฉลี่ยพนักงาน",
                "solution": "Function Main\n    Declare Integer id\n    Declare Integer gender\n    Declare Integer age\n    Declare Real height\n    Declare Real weight\n    Declare Integer i\n    Declare Real mHSum\n    Declare Real fHSum\n    Declare Real mWSum\n    Declare Real fWSum\n    Declare Real ageSum\n    Declare Integer mCount\n    Declare Integer fCount\n\n    Assign mHSum = 0.0\n    Assign fHSum = 0.0\n    Assign mWSum = 0.0\n    Assign fWSum = 0.0\n    Assign ageSum = 0.0\n    Assign mCount = 0\n    Assign fCount = 0\n\n    For i = 1 To 650\n        Input id\n        Input gender\n        Input age\n        Input height\n        Input weight\n        Assign ageSum = ageSum + age\n        If gender == 1 Then\n            Assign mCount = mCount + 1\n            Assign mHSum = mHSum + height\n            Assign mWSum = mWSum + weight\n        Else\n            Assign fCount = fCount + 1\n            Assign fHSum = fHSum + height\n            Assign fWSum = fWSum + weight\n        End If\n    End For\n\n    Output mHSum / mCount\n    Output fHSum / fCount\n    Output mWSum / mCount\n    Output fWSum / fCount\n    Output ageSum / 650.0\nEnd"
            },
            {
                "problem": "จากโจทย์ในข้อ 3 จงเขียน Pseudocode แสดงผลลัพธ์ตามที่กำหนด พนักงานที่สูงที่สุด..., เตี้ยที่สุด..., อ้วนที่สุด..., ผอมที่สุด...",
                "solution": "Function Main\n    Declare Integer id\n    Declare Integer gender\n    Declare Integer age\n    Declare Real height\n    Declare Real weight\n    Declare Integer i\n    \n    Declare Real maxH\n    Declare Integer maxHId\n    Declare Integer maxHG\n    Declare Real minH\n    Declare Integer minHId\n    Declare Integer minHG\n    Declare Real maxW\n    Declare Integer maxWId\n    Declare Integer maxWG\n    Declare Real minW\n    Declare Integer minWId\n    Declare Integer minWG\n\n    Assign maxH = 0.0\n    Assign minH = 999.0\n    Assign maxW = 0.0\n    Assign minW = 999.0\n\n    For i = 1 To 650\n        Input id\n        Input gender\n        Input age\n        Input height\n        Input weight\n        \n        If height > maxH Then\n            Assign maxH = height\n            Assign maxHId = id\n            Assign maxHG = gender\n        End If\n        If height < minH Then\n            Assign minH = height\n            Assign minHId = id\n            Assign minHG = gender\n        End If\n        If weight > maxW Then\n            Assign maxW = weight\n            Assign maxWId = id\n            Assign maxWG = gender\n        End If\n        If weight < minW Then\n            Assign minW = weight\n            Assign minWId = id\n            Assign minWG = gender\n        End If\n    End For\n    \n    Output maxHId\n    Output maxH\n    Output maxHG\n    Output minHId\n    Output minH\n    Output minHG\n    Output maxH - minH\n    \n    Output maxWId\n    Output maxW\n    Output maxWG\n    Output minWId\n    Output minW\n    Output minWG\n    Output maxW - minW\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode เพื่อรับข้อมูลของนักเรียน 200 คน เก็บใน Array ข้อมูลได้แก่ รหัสนักเรียน และคะแนนสอบแต่ละครั้ง มี 5 ครั้งรวม 100 คะแนน ให้หาเกรดและคะแนนเฉลี่ยครั้งที่ 3 และครั้งที่ 5",
                "solution": "Function Main\n    Declare Integer data[200][6]\n    Declare Integer i\n    Declare Integer total\n    Declare Real sum3\n    Declare Real sum5\n\n    Assign sum3 = 0.0\n    Assign sum5 = 0.0\n\n    For i = 0 To 199\n        Input data[i][0]\n        Input data[i][1]\n        Input data[i][2]\n        Input data[i][3]\n        Input data[i][4]\n        Input data[i][5]\n    End For\n\n    For i = 0 To 199\n        Assign total = data[i][1] + data[i][2] + data[i][3] + data[i][4] + data[i][5]\n        Assign sum3 = sum3 + data[i][3]\n        Assign sum5 = sum5 + data[i][5]\n        Output data[i][0]\n        Output total\n        If total >= 80 Then\n            Output \"A\"\n        Else\n            If total >= 61 Then\n                Output \"B\"\n            Else\n                If total >= 41 Then\n                    Output \"C\"\n                Else\n                    Output \"F\"\n                End If\n            End If\n        End If\n    End For\n    Output sum3 / 200.0\n    Output sum5 / 200.0\nEnd"
            }
        ]
    },
    {
        "year": "2567",
        "name": "การสอบภาคฤดูร้อน ปี 2567",
        "questions": [
            {
                "problem": "จงเขียน Pseudocode เพื่อรับข้อมูลราคาอาหาร หลังจากนั้นให้คำนวณหาส่วนลดราคา 15 เปอร์เซ็นต์ และแสดงผลลัพธ์ที่จอภาพ",
                "solution": "Function Main\n    Declare Real price\n    Declare Real discount\n    Declare Real net\n    Input price\n    Assign discount = price * 0.15\n    Assign net = price - discount\n    Output discount\n    Output net\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode รับตัวเลขไม่เกินหลักร้อย 3 จำนวน แล้วให้เปรียบเทียบว่าจำนวนที่มากที่สุดคือเลขใด จำนวนที่มากรองลงมาคือเลขใด และจำนวนที่น้อยที่สุดคือเลขใด",
                "solution": "Function Main\n    Declare Integer a\n    Declare Integer b\n    Declare Integer c\n    Declare Integer temp\n    Input a\n    Input b\n    Input c\n    If a < b Then\n        Assign temp = a\n        Assign a = b\n        Assign b = temp\n    End If\n    If a < c Then\n        Assign temp = a\n        Assign a = c\n        Assign c = temp\n    End If\n    If b < c Then\n        Assign temp = b\n        Assign b = c\n        Assign c = temp\n    End If\n    Output a\n    Output b\n    Output c\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode รับข้อมูลนักเรียนจำนวน 1500 คน เพื่อเก็บใน Array ข้อมูลได้แก่ รหัสนักเรียน และเพศ หลังจากนั้นให้แยกว่ามีจำนวนนักเรียนหญิงกี่คนและนักเรียนชายกี่คนแล้วแสดงผลลัพธ์",
                "solution": "Function Main\n    Declare Integer data[1500][2]\n    Declare Integer i\n    Declare Integer mCount\n    Declare Integer fCount\n    Assign mCount = 0\n    Assign fCount = 0\n    For i = 0 To 1499\n        Input data[i][0]\n        Input data[i][1]\n        If data[i][1] == 1 Then\n            Assign mCount = mCount + 1\n        Else\n            Assign fCount = fCount + 1\n        End If\n    End For\n    Output 1500\n    Output fCount\n    Output mCount\nEnd"
            },
            {
                "problem": "มหาวิทยาลัยแห่งหนึ่งมีนักศึกษา 5500 คน แบ่งเป็น 4 ชั้นปี นักศึกษาแต่ละคนต้องเลือกสมัครเข้าชมรมกีฬาคนละ 1 ชมรม...",
                "solution": "Function Main\n    Declare Integer year\n    Declare Integer gender\n    Declare Integer club\n    Declare Integer cSwim\n    Declare Integer cFoot\n    Declare Integer cBad\n    Declare Integer cSwimF[4]\n    Declare Integer cFootF[4]\n    Declare Integer cBadF[4]\n    Declare Integer i\n    Declare Integer maxClub\n    \n    Assign cSwim = 0\n    Assign cFoot = 0\n    Assign cBad = 0\n    For i = 0 To 3\n        Assign cSwimF[i] = 0\n        Assign cFootF[i] = 0\n        Assign cBadF[i] = 0\n    End For\n\n    For i = 1 To 5500\n        Input year\n        Input gender\n        Input club\n        \n        If club == 1 Then\n            Assign cSwim = cSwim + 1\n            If gender == 2 Then\n                Assign cSwimF[year-1] = cSwimF[year-1] + 1\n            End If\n        End If\n        If club == 2 Then\n            Assign cFoot = cFoot + 1\n            If gender == 2 Then\n                Assign cFootF[year-1] = cFootF[year-1] + 1\n            End If\n        End If\n        If club == 3 Then\n            Assign cBad = cBad + 1\n            If gender == 2 Then\n                Assign cBadF[year-1] = cBadF[year-1] + 1\n            End If\n        End If\n    End For\n\n    Output 5500\n    Output cSwim\n    Output cFoot\n    Output cBad\n    \n    Declare Integer maxFSwim\n    Declare Integer maxFFoot\n    Declare Integer maxFBad\n    Assign maxFSwim = cSwimF[0] + cSwimF[1] + cSwimF[2] + cSwimF[3]\n    Assign maxFFoot = cFootF[0] + cFootF[1] + cFootF[2] + cFootF[3]\n    Assign maxFBad = cBadF[0] + cBadF[1] + cBadF[2] + cBadF[3]\n\n    If maxFSwim >= maxFFoot Then\n        If maxFSwim >= maxFBad Then\n            Output \"ว่ายน้ำ\"\n            Output cSwimF[0]\n            Output cSwimF[1]\n            Output cSwimF[2]\n            Output cSwimF[3]\n        Else\n            Output \"แบดมินตัน\"\n            Output cBadF[0]\n            Output cBadF[1]\n            Output cBadF[2]\n            Output cBadF[3]\n        End If\n    Else\n        If maxFFoot >= maxFBad Then\n            Output \"ฟุตซอล\"\n            Output cFootF[0]\n            Output cFootF[1]\n            Output cFootF[2]\n            Output cFootF[3]\n        Else\n            Output \"แบดมินตัน\"\n            Output cBadF[0]\n            Output cBadF[1]\n            Output cBadF[2]\n            Output cBadF[3]\n        End If\n    End If\nEnd"
            },
            {
                "problem": "ร้านสะดวกซื้อเอเอ มีสาขาทั่วประเทศ 100 สาขา ต้องการเก็บยอดขายเดือนเมษายน 2568 จงเขียน pseudocode เพื่อเก็บข้อมูลดังกล่าวลงใน Array แล้วแสดงผลลัพธ์",
                "solution": "Function Main\n    Declare Real sales[30][100]\n    Declare Integer d\n    Declare Integer b\n    Declare Real total\n    Declare Real maxDaySales\n    Declare Integer maxDay\n    Declare Real daySum\n    Declare Real maxBranchSales\n    Declare Integer maxBranch\n    Declare Real branchSum\n    \n    Assign total = 0.0\n    Assign maxDaySales = 0.0\n    Assign maxBranchSales = 0.0\n\n    For d = 0 To 29\n        Assign daySum = 0.0\n        For b = 0 To 99\n            Input sales[d][b]\n            Assign daySum = daySum + sales[d][b]\n            Assign total = total + sales[d][b]\n        End For\n        If daySum > maxDaySales Then\n            Assign maxDaySales = daySum\n            Assign maxDay = d + 1\n        End If\n    End For\n\n    For b = 0 To 99\n        Assign branchSum = 0.0\n        For d = 0 To 29\n            Assign branchSum = branchSum + sales[d][b]\n        End For\n        If branchSum > maxBranchSales Then\n            Assign maxBranchSales = branchSum\n            Assign maxBranch = b + 1\n        End If\n    End For\n\n    Output total\n    Output maxDay\n    Output maxBranch\n    Output maxBranchSales\nEnd"
            }
        ]
    },
    {
        "year": "2568",
        "name": "การสอบภาค 1 ปีการศึกษา 2568",
        "questions": [
            {
                "problem": "จงเขียน Pseudocode เพื่อรับค่า 100 ค่า ที่มีค่าระหว่าง 0 - 100 เก็บในอาร์เรย์ 1 มิติ AA และ BB โดยค่าในตำแหน่งเดียวกันของ BB จะต้องมากกว่าค่าใน AA เสมอ",
                "solution": "Function Main\n    Declare Integer AA[100]\n    Declare Integer BB[100]\n    Declare Integer i\n    Declare Integer valA\n    Declare Integer valB\n    For i = 0 To 99\n        Assign valA = -1\n        While valA < 0 or valA > 100\n            Output \"Enter AA[\" & i & \"] (0-100):\"\n            Input valA\n        End While\n        Assign AA[i] = valA\n        \n        Assign valB = -1\n        While valB <= valA or valB > 100\n            Output \"Enter BB[\" & i & \"] (> \" & valA & \" and <= 100):\"\n            Input valB\n        End While\n        Assign BB[i] = valB\n    End For\nEnd"
            },
            {
                "problem": "รับค่าส่วนสูงเป็นเซนติเมตร และแปลงเป็นฟุตเพื่อแสดงผลทางหน้าจอ (1 ฟุต = 30.6 ซม.)",
                "solution": "Function Main\n    Declare Real height_cm\n    Declare Real height_ft\n    \n    Assign height_cm = -1\n    While height_cm <= 0\n        Output \"Enter height in cm:\"\n        Input height_cm\n    End While\n    \n    Assign height_ft = height_cm / 30.6\n    Output \"Height in feet: \" & height_ft\nEnd"
            },
            {
                "problem": "สินค้าชิ้นละ 100 บาท หากซื้อเกิน 100 ชิ้น จะได้รับส่วนลด 3% สำหรับชิ้นที่เกิน 100 ชิ้นขึ้นไป",
                "solution": "Function Main\n    Declare Integer amount\n    Declare Real total_price\n    Declare Real discount\n    \n    Assign amount = -1\n    While amount < 0\n        Output \"Enter number of items:\"\n        Input amount\n    End While\n    \n    If amount > 100 Then\n        Assign discount = (amount - 100) * 100 * 0.03\n        Assign total_price = (amount * 100) - discount\n    Else\n        Assign total_price = amount * 100\n    End If\n    \n    Output \"Total price: \" & total_price & \" Baht\"\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode คำนวณสถิติคะแนนสอบของนักศึกษา 448 คน: กลุ่มต้องปรับปรุง (0-50) และกลุ่มผ่าน (51-100) หาค่าสูงสุด ต่ำสุด ค่าเฉลี่ย และจำนวนคนในแต่ละกลุ่ม",
                "solution": "Function Main\n    Declare String student_id\n    Declare Real score\n    Declare Integer improve_count\n    Declare Integer pass_count\n    Declare Real max_score\n    Declare String max_id\n    Declare Real min_score\n    Declare String min_id\n    Declare Real sum_all\n    Declare Real sum_improve\n    Declare Real sum_pass\n    Declare Integer j\n    \n    Assign improve_count = 0\n    Assign pass_count = 0\n    Assign max_score = -1\n    Assign min_score = 101\n    Assign sum_all = 0\n    Assign sum_improve = 0\n    Assign sum_pass = 0\n    \n    For j = 1 To 448\n        Output \"Enter Student ID:\"\n        Input student_id\n        \n        Assign score = -1\n        While score < 0 or score > 100\n            Output \"Enter score (0-100):\"\n            Input score\n        End While\n        \n        Assign sum_all = sum_all + score\n        \n        If score >= 51 Then\n            Output student_id & \" gets \" & score & \" in Group Pass\"\n            Assign pass_count = pass_count + 1\n            Assign sum_pass = sum_pass + score\n        Else\n            Output student_id & \" gets \" & score & \" in Group Improve\"\n            Assign improve_count = improve_count + 1\n            Assign sum_improve = sum_improve + score\n        End If\n        \n        If score > max_score Then\n            Assign max_score = score\n            Assign max_id = student_id\n        End If\n        \n        If score < min_score Then\n            Assign min_score = score\n            Assign min_id = student_id\n        End If\n    End For\n    \n    Output \"Improve Group: \" & improve_count & \" people. Pass Group: \" & pass_count & \" people.\"\n    Output \"Max score: \" & max_id & \" with \" & max_score & \" points.\"\n    Output \"Min score: \" & min_id & \" with \" & min_score & \" points.\"\n    Output \"Avg all: \" & (sum_all / 448)\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode บันทึกยอดการผลิตของเครื่องจักร 3 เครื่อง ในระยะเวลา 4 สัปดาห์ และแสดงยอดรวมของแต่ละเครื่องและยอดรวมทั้งหมด",
                "solution": "Function Main\n    Declare Integer prod[3][4]\n    Declare Integer m\n    Declare Integer w\n    Declare Integer sumA\n    Declare Integer sumB\n    Declare Integer sumC\n    Declare Integer total\n    \n    Assign sumA = 0\n    Assign sumB = 0\n    Assign sumC = 0\n    Assign total = 0\n    \n    For m = 0 To 2\n        For w = 0 To 3\n            Assign prod[m][w] = -1\n            While prod[m][w] < 0\n                Output \"Enter production for Machine \" & m & \" Week \" & w & \":\"\n                Input prod[m][w]\n            End While\n            Assign total = total + prod[m][w]\n            If m = 0 Then\n                Assign sumA = sumA + prod[m][w]\n            Else\n                If m = 1 Then\n                    Assign sumB = sumB + prod[m][w]\n                Else\n                    Assign sumC = sumC + prod[m][w]\n                End If\n            End If\n        End For\n    End For\n    \n    Output \"After 4 weeks, total production is \" & total & \" pieces\"\n    Output \"Machine A produced \" & sumA & \" pieces, Machine B produced \" & sumB & \" pieces, Machine C produced \" & sumC & \" pieces\"\nEnd"
            }
        ]
    },
    {
        "year": "2568",
        "name": "การสอบซ่อมภาค 1 ปีการศึกษา 2568",
        "questions": [
            {
                "problem": "จงเขียน pseudocode เพื่อเก็บข้อมูลยอดขายรายเดือนของ 99 สาขา ตลอดระยะเวลา 12 เดือน ในอาร์เรย์ 2 มิติ",
                "solution": "Function Main\n    Declare Real sales[99][12]\n    Declare Integer branch\n    Declare Integer month\n    \n    For branch = 0 To 98\n        For month = 0 To 11\n            Assign sales[branch][month] = -1\n            While sales[branch][month] < 0\n                Output \"Enter sales for branch \" & (branch + 1) & \" month \" & (month + 1) & \":\"\n                Input sales[branch][month]\n            End While\n        End For\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน pseudocode เพื่อรับคะแนนรายงาน (20) และคะแนนสอบ (80) ของผู้ใช้ 99 คน คำนวณคะแนนรวม และแสดงผล",
                "solution": "Function Main\n    Declare Real report_score\n    Declare Real exam_score\n    Declare Real total_score\n    Declare Integer k\n    \n    For k = 1 To 99\n        Assign report_score = -1\n        While report_score < 0 or report_score > 20\n            Output \"Enter report score (0-20) for person \" & k & \":\"\n            Input report_score\n        End While\n        \n        Assign exam_score = -1\n        While exam_score < 0 or exam_score > 80\n            Output \"Enter exam score (0-80) for person \" & k & \":\"\n            Input exam_score\n        End While\n        \n        Assign total_score = report_score + exam_score\n        Output \"Person \" & k & \" total score: \" & total_score\n    End For\nEnd"
            },
            {
                "problem": "จงเขียน pseudocode เพื่อรับรหัสปี (60-68), คะแนน, และผลกิจกรรม (Pass/Fail) และตรวจสอบการให้เกรดตามเงื่อนไข",
                "solution": "Function Main\n    Declare Integer year_code\n    Declare Real s\n    Declare String activity\n    Declare String grade\n    \n    Output \"Enter year code (60-68):\"\n    Input year_code\n    \n    Output \"Enter exam score (0-100):\"\n    Input s\n    \n    Output \"Enter activity (Pass/Fail):\"\n    Input activity\n    \n    Assign grade = \"U\"\n    \n    If year_code >= 60 and year_code <= 65 Then\n        If s > 60 and activity = \"Pass\" Then\n            Assign grade = \"S\"\n        End If\n    Else\n        If year_code >= 66 and year_code <= 68 Then\n            If s > 70 and activity = \"Pass\" Then\n                Assign grade = \"S\"\n            Else\n                If s >= 90 Then\n                    Assign grade = \"S\"\n                End If\n            End If\n        End If\n    End If\n    \n    Output \"Grade: \" & grade\nEnd"
            },
            {
                "problem": "จากข้อ 1 จงเขียน Pseudocode คำนวณและแสดงยอดขายรวมของแต่ละสาขา, สาขาที่ยอดขายสูงสุด/ต่ำสุด และยอดขายเฉลี่ยรวมทุกสาขา",
                "solution": "Function Main\n    Declare Real sales[99][12]\n    Declare Real branch_totals[99]\n    Declare Real max_sales\n    Declare Integer max_branch\n    Declare Real min_sales\n    Declare Integer min_branch\n    Declare Real sum_all_sales\n    Declare Integer b\n    Declare Integer mo\n    \n    Assign max_sales = -1\n    Assign min_sales = 999999999\n    Assign sum_all_sales = 0\n    \n    For b = 0 To 98\n        Assign branch_totals[b] = 0\n        For mo = 0 To 11\n            Assign sales[b][mo] = 100\n            Assign branch_totals[b] = branch_totals[b] + sales[b][mo]\n            Assign sum_all_sales = sum_all_sales + sales[b][mo]\n        End For\n        \n        Output \"Branch \" & (b + 1) & \" total sales = \" & branch_totals[b] & \" Baht\"\n        \n        If b = 0 Then\n            Assign max_sales = branch_totals[b]\n            Assign max_branch = b + 1\n            Assign min_sales = branch_totals[b]\n            Assign min_branch = b + 1\n        Else\n            If branch_totals[b] > max_sales Then\n                Assign max_sales = branch_totals[b]\n                Assign max_branch = b + 1\n            End If\n            If branch_totals[b] < min_sales Then\n                Assign min_sales = branch_totals[b]\n                Assign min_branch = b + 1\n            End If\n        End If\n    End For\n    \n    Output \"Branch with highest sales is branch \" & max_branch\n    Output \"Branch with lowest sales is branch \" & min_branch\n    Output \"Average sales = \" & (sum_all_sales / 99) & \" Baht\"\nEnd"
            },
            {
                "problem": "จงเขียน Pseudocode คำนวณค่าเช่าห้องและค่าสาธารณูปโภค โดยคิดจากประเภทห้อง, ชั้น, เรทค่าไฟแบบขั้นบันได, ค่าน้ำ และค่าส่วนกลาง",
                "solution": "Function Main\n    Declare String room_type\n    Declare Integer floor\n    Declare Real elec_units\n    Declare Real water_units\n    \n    Declare Real room_cost\n    Declare Real elec_cost\n    Declare Real water_cost\n    Declare Real common_cost\n    Declare Real total_cost\n    \n    Output \"Enter room type (Air/Fan):\"\n    Input room_type\n    \n    Output \"Enter floor (1-5):\"\n    Input floor\n    \n    Output \"Enter electricity units:\"\n    Input elec_units\n    \n    Output \"Enter water units:\"\n    Input water_units\n    \n    If room_type = \"Air\" Then\n        Assign room_cost = 5000\n    Else\n        Assign room_cost = 3000\n    End If\n    \n    If floor = 5 Then\n        Assign room_cost = room_cost - 500\n    End If\n    \n    If elec_units <= 50 Then\n        Assign elec_cost = elec_units * 1\n    Else\n        If elec_units < 100 Then\n            Assign elec_cost = (50 * 1) + ((elec_units - 50) * 1.50)\n        Else\n            Assign elec_cost = elec_units * 2\n        End If\n    End If\n    \n    Assign water_cost = (water_units * 5) + 20\n    Assign common_cost = 100\n    \n    Assign total_cost = room_cost + elec_cost + water_cost + common_cost\n    \n    Output \"Room cost: \" & room_cost\n    Output \"Electricity cost: \" & elec_cost\n    Output \"Total cost: \" & total_cost\nEnd"
            }
        ]
    }
];