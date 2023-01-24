import React from "react";
import AuthCard from "../../molecules/AuthCard/AuthCard";
import "../../../App.css";

function SocialAuth() {
  const authArr: string[] = ["google", "facebook", "Microsoft"];
  const src = [
    "https://img.icons8.com/color/48/000000/google-logo.png",
    "https://img.icons8.com/color/48/000000/facebook-new.png",
    "https://s3-alpha-sig.figma.com/img/997a/3e0d/56d2d6ceb3d6731d1495a210c1fa2e56?Expires=1675036800&Signature=fQ3xaaNML1BG3iGPB8Ys9kpqUhSX225O52XYSLNz9A56MIvSzGeJ~NPpX~Ez6eb9fcobcN6ZV8S-p28d6EDOgjtBW-A0IJ7IxLJh4~eyzSXiN1ZJM48~EUAgV7aXhbYzgIA5xOXJtibZMxoK3p-qWPq61UXnOnGAjX5uUhVtcBxTYzmSOsA0Uk-9R2VbDqs5NpM-m~8xZ~DJs0qXMpA9tKNGrEWxDgvhyKRzl2RJ7HPzoohu7C5H80vmtUuhgRSqPVRWukYhThCz~rQEfra8BgwGgLP14A74d-VfPi1zhMqqRdDzLYQ3RpZpTTTAbmwVg42nb8h571i2EFErsfyo8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ];
  return (
    <>
      <div className="social-auth">
        {authArr.map((auth, index) => {
          return <AuthCard src={src[index]} authProvider={auth} />;
        })}
      </div>
    </>
  );
}

export default SocialAuth;
