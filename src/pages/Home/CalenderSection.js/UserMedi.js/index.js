import { UserMediList } from "./style"

const UserMedi = ({check, checkImg, nocheckImg}) => {
    return (
        
            <UserMediList isChecked={check}>
                <img src={check ? checkImg : nocheckImg} />약입니다
            </UserMediList>
       

    )

}
export default UserMedi;