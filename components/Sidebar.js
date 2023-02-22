/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/solid"
import {HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon} from "@heroicons/react/outline"


export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">

        {/* Twitter Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-4">
            <Image 
                width="45" 
                height="45" 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUDqfT///8Ap/QAqvQApfT4/f8ArPT7///0/P/k9v7p+P7t+v5syfjo9/71/f+o3/ve9P7R7/2D0fm85vya2vpUwfd5zvnA6fxox/jJ7PxCuvYytvYhsvWU1/pOvvev4vuK0/k/uPZkw/dfyPei3Ps4tPWLSY/uAAAKl0lEQVR4nO2da5eiOBCGoYCAl5b7HRXd7v//Fxe7VUCTECAJZI7vp505LvBMbpVKpUrT/3VpS3+AcH0I1deHUH19CNXXh1B9fQjV14dQfX0I1deHUH19CBeT7RxsLg9aG6G1zcPj/lSWVaOyLP4L3NRz5jxxVYTbsI5LpAGAdlfzn4CqInG9yQ26HkLPzRCYT7aubpin2p8GuRJCJ8yatsPRtZTo5G7YHpYG+8h7/GkVhLZ7ouM9IMtgN/y09Hpr9Op8/+MKCLffFb5zYmSixKc+zArjv4eBFv79zeKEdliwtF/bkNWR3I5WfkWPh0Fs/f4djtA6CKLByMtgDN/vp5ch/lnOudfZq7+h+E6YZ2V1ci2RWO03RWgs3w3RyN6nHNs7/vQ7A/rrz2+E4e2doAV8DAq6dvF4vD/GS/7C5yfV678VoQ39+w9hLx7w/PZR7IjdJnD8oHyfq2BvYwmz50A962JlR2gq3+/3JX8TjuVHBbarPwBeCP32t4gwnjnpkExuwDtBvG3MvKBAhKWm2uEInaz9NVT0lWeerKlDsINYXCuNOBNDoOMIU6P3BAYDYqKcvTmbUKOuo+jRPn3CuPf/mKetKMCYByAVPnu8q0fov4x9iMWsGXYimK9pwhRLGLw2u5kIWflr0S3YLBXPD+8S7qr3XyYCWvE8a5lgEnpunnqEIW7k1twBt9MXelZB0r6uS7jHvZl7R3Vi8YDF7xS529p9wq8L/vcJ4VMnqhbN1yi9eQ32l0sW9ghDwvAwA56t2FtyBemoe8cCflV3Cd9m0ocg47f0OyfhfVSr6tPTUkXnDmFBfDfE3BDP4gE1o2PsQNwSWpQ53Cw42aibUgJhT6gl9Gnv5mWG15K4WlUt4ZlqaAByOQBuxK/1r9+dtYRDppQRzDo+YHoHf6H0SWgP7kghm7vV2JZSqDoyg3a1sK6DcwBUOe37h+XKnmZuPtMnIctCBeg4a/EXb6+96OZuexJuCTZbXxB7NAS6fAnmTF83Z9ST8IttjEA1fU6tJTch1D3Lm5GwUfI1DdAhG01CBOXvkJpAaKLvSaPRk9tJofhz/U8gbJRNsXDoJgV3PaywdqYZQwgoGm+Lz3UBj9PTFdWuFuNGCZTnkSbOTsK+qVVrZI5Z8XsC7Tpu/fff/VziZEbP946w2l4FkI1hdGVONEH73o7lPb4TAdqzTzkSV0OoO5N9S/g9Zaoz2RkzeYTH7ntbwnzaFwDKUqY5R9p6j6Lee1vC3dTdKRgxy2mqrInG7AN2fW3TXShgVoE/ZOfI2d6/+yI6hFiXN/uTr2eqEWBxg6B+RvV2ct0hdGc+3KySkAy544Mw8A3F++auQ+jNHimgVVm4wZ9WySCEBONn6RCOtWrwL9HKDBsMup3/7EFhg4C6Z08uH+MfTLPcn/2XDiu+DQ188EiX0OM33YGGLlmUbqznv6rN7dkkIfyy3CW0eXTTVmBqqMxqN/W2t3cLXy0QfprrneOH/F8LoBmoKuJ9LZ4QH0HcI3REnZsAjI6xnCC8G7AfTxPJdmjylIHfA/QJ5y+JSwq/W32J3DtKPzrhqJSF8KByIzIR6selP3OGhgg3ae7JiSQQJfpM4wQ/CFX1VsSaKEn0ufRudUOZS3bccpRBXQ8fZ5eAaq9Y9kMni2rT2K0jDIr/pIcT8BHVLnUunRgbVXspdW8h+2hPiCoaoaXwGvEQFHhv351QegwBf8EV7yC6zzSzPInrEBDiYO+rhewgAgGCI5UwUnlPcRchSOROiA1iV0sG3vB+EMoPGuQugln6tEuZIqJWrYoQrfXYWyhrbz8EJ8Ldlwfh99JfOFftVS4CYS49qo6zIBog3KrsoPkVKS7k6cXg69GXL9JE0xKq6734FZxI4RLT4trWp86FQxKhHihtuL1GYOAIJ8bTrERADFzqeISVnk0R8a5rh1DlRR+uJMAu4VZlZw1xGIqIVFhCiBw/2CVU1+NGS//QO3uSfmuHl2i5ZnqEtqpORZOSh+Ul84eiW/2KcsnlnzjlpiZEeiG01ZxsaBG8r6fcuYr9tKJd/XzL9fWtXiPSs3a9EVoKOvipYebvGekOyp3SlNSUmJisgl+KIULwzkAn1DfiE8jwlEm/04LNfelJz+0wQ3CiAhKye/oqIQ5cTCbkL92oY6H+DORBIGVo3alykAFDiayIOWjH30dcRpS97wDhrOSb8kQ8kGEh1L352RuFi3TyO0jouUc3d5pmXJpgQAx5D7GEVnRLH26UWfR9WpqBLsI9mUHC6P7/Axho1eeK5PMYOuFWmT2iOTgK8YSpKq4MKIYBsYSSE1jMEMv9YxxhrgghxCyXyHGEqly6AIZRSJhL1TiFYkyqjiVU4xRq0CKlECpxgDHgvBggVOEUiu5/GiJUoBHJoQlshDIzkUwSXBgBiYRrv2vJXteAuD9ct2FjMk4zNMJ1B7pd2NNwkgm9NTsxRpQXoXgx1nsgTLpaMZZwtcYblGMScFIrWhEzfC8rc1QJHCqhtU6f6bgyRvSqZIcVWm9QjMsuOlB3zVnfiTDjloKVsEFcmuhV3+MAh2vnrez8YnwtsUFC3VpTmoWxg5CJsNlKTSlwJ0jjM4qzEOqbtdioaEIxOCZC3alX0YyDp6HTCXU9vyx/T/9R708Moe64S0cvwGlSpRRmwmY0JsaSu2IopxURGUF4Y6yW66toYkb/UYS3cqblqNq2HAGn5vMfR6jfKkXFaImGnFywYDRh05Abd3+RvP9HY63RWYQ3yF0u1SKftBDOItQ3gUx/KvGOrzDCr/pH6kicVdtuAqF3rKSuizCvvvRYwkP+Xh5arIx6XhnNcYRWeJVtgs+ZZMYS7tKgItRPFqjZxbNZCQ95jS9/LVQ8qr2xENpeGBRSssi+AXKoDT5AaO28c1BQyl8LBSxnVkEbILR2vltnS9Fpt6LZXGouNoRecI2zpD66YZqGN7nHJIsbNNM0l9zYT9rR4wjPFdxTNRvI+JWs3M1UGfOK2HUI81X4mF6FqeIwmXCVQRfAZwj+Ea4x5oJnAWJdW99RNlSz7Zge4equ/8wqIokjPC9N1Bdo0YEroK7ZwdJQXUHBFBU7ilC3I7SW8CfQcIViZhM226LjOtZEmFQ4koVQ1/398oxQRpysGByhrufxQr7sB5+2Z4yInUqo22mxJGPMfYZ5I2yG47mQ76S4Cczye35VcwbCRmlmLLCTv7h89kkshLqVZpLnHKiiiRWUpxE28hMkrbMCVEdBEwyF8ObUluNWA+0kuP1IhM2kE2bCG9KEeGxJYY6EN8joJLAhAcqA7xZiPKGuO2lSCnG0AaBC+PBjIWx0SIOLxre7AkBR5yKXhxcN+rwP/vHE7+C+ab0gF2J+EsXi1d/5xxjB3KYEMLUqCflvjwbEejJj51FWGpPb8jb0Elfa2OtqxOma9eUfrxdkjJx9ml+jMo78ncSx19XYM2DHS6PkVBlNpx0CbX5gAiqz49mX3jU7mhSpYDveOQqy00+Ffg8AOrCPP6Lq55QlUfjlLNR0T02MNrnJdrZeHrp1ss/ioiyrRmVZnOJ4H3yHubd15M6ZJM0gfJHtHJZuLqz4Ea5VH0L19SFUXx9C9fUhVF8fQvX1IVRfH0L19SFUXx9C9fU/9D2x5aD6RWMAAAAASUVORK5CYII="
            ></Image>
        </div>

        {/* Menu */}
        <div className="mt-6 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home"          Icon={HomeIcon} active/>
            <SidebarMenuItem text="Explore"       Icon={HashtagIcon}/>
            <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
            <SidebarMenuItem text="Messages"      Icon={InboxIcon}/>
            <SidebarMenuItem text="Bookmark"      Icon={BookmarkIcon}/>
            <SidebarMenuItem text="Lists"         Icon={ClipboardIcon}/>
            <SidebarMenuItem text="Profile"       Icon={UserIcon}/>
            <SidebarMenuItem text="More"          Icon={DotsCircleHorizontalIcon}/>
        </div>
        
        {/* Button */}
        <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-90 text-lg hidden xl:inline'>Tweet</button>

        {/* Mini Profile */}
        <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
            <img 
                src="https://avatars.githubusercontent.com/u/104575223?v=4" 
                alt="user-img" 
                className="h-10 w-10 rounded-full xl:mr-2"
            />
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">João Victor Alonso de Paula Sperandio</h4>
                <p className="text-gray-500">@Sperandio.JoaoVictor</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>

    </div>
  )
}
