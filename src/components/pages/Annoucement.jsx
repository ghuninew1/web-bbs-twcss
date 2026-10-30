import { Title } from "../";

const Annoucement = () => {
    return (
        <div className="flex flex-col justify-center items-center mx-auto mt-10 md:mt-0 px-2 max-w-[900px]">
            <Title title="Annoucement" />
            <div className="mx-3 px-2 animate-fade">
                <div className="font-sans font-normal text-white text-sm md:text-base antialiased tracking-wide">
                    <h3 className="font-bold text-xl md:text-2xl text-center">
                        ประกาศแจ้งบุคคลพ้นสภาพการเป็นพนักงาน
                    </h3>
                    <h3 className="font-medium text-xl md:text-2xl text-center">
                        บริษัท บิ๊กเบรน สตูดิโอ จำกัด
                    </h3>
                    <p className="mt-5 first-letter:pl-5">
                        ทางบริษัท บิ๊กเบรน สตูดิโอ
                        จำกัดขอประกาศแจ้งการพันสภาพการเป็นพนักงาน ของ
                        นางสาวศิภัสส์ฎา อภิวันท์ (เจด)
                    </p>
                    <p className="py-5 first-letter:pl-5">
                        นับตังแต่วันที่ 29 พฤศจิกายน พ.ศ. 2564 เป็นต้นไป
                        ทางบริษัทฯ ไม่ขอรับผิดชอบ ต่อการ กระทำใดๆ ทั้งสิ้น ของ
                        นางสาวศิภัสสฎา อภิวันท์ (เจด)
                    </p>
                    <p className="first-letter:pl-5">
                        หากบุคคลนั้นกระทำการแอบอ้างใช้ชื่อบริษัทฯ หรือ
                        ชื่อใกล้เคียงอื่นๆ รวมถึงใช้ชื่อพนักงานเพื่อ แอบอ้าง
                        หรือกระทำการใดๆ ก็ตามทั้งก่อนหน้า และ
                        หลังจากพ้นสภาพพนักงานไป ทางบริษัทฯ ไม่มี
                        ส่วนรับผิดชอบกับความเสียหายที่เกิดขึ้นทั้งสิ้น
                    </p>
                    <p className="mb-10 pt-5 first-letter:pl-5">
                        จึงเรียนมาเพื่อให้บริษัทที่เกี่ยวข้อง ทั้งลูกค้าใหม่ และ
                        ลูกค้าเดิมให้ทราบโดยทั่วกัน เพื่อไม่ให้เกิด ความสับสน
                        และ
                        การเข้าใจผิดว่าบุคลดังกล่าวมีส่วนเกี่ยวข้องกับการประกอบธุรกรรม
                        และ ธุรกิจ การค้าของบริษัทฯ ประกาศให้ทราบโดยทั่วกัน
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Annoucement;
