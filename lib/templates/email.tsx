interface ContactProps {
  name: string;
  email: string;
  message: string;
  date: string;
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function EmailTemplate({ name, email, message, date }: ContactProps) {
  return (
    
    <>
      <div
        style={{
          fontFamily: "Inter, Arial, sans-serif",
          backgroundColor: "#f3f4f6",
          padding: "40px",
          borderRadius: "8px",
        }}
      >
        <table
          width="100%"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f3f4f6 " }}>
              <td style={{ textAlign: "center", padding: "10px 0" }}>
                <h1 style={{ fontSize: "24px", color: "#1f2937", margin: "0" }}>
                  Thyltech
                </h1>
              </td>
            </tr>
          </thead>
          <tbody style={{ padding: "20px", display: "block" }}>
            <tr>
              <td style={{ padding: "10px 0", color: "#1f2937" }}>
                <h2 style={{ fontSize: "18px", margin: "0 0 10px 0" }}>
                  Détails du message
                </h2>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  <strong>Date: </strong> {date ?? "Date inconnue"}
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px 0", color: "#1f2937" }}>
                <h2 style={{ fontSize: "18px", margin: "0 0 10px 0" }}>
                  Expéditeur
                </h2>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  <strong>Nom: </strong> {name ?? "Nom inconnu"}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  <strong>Email: </strong> {email ?? "Email inconnu"}
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px 0", color: "#1f2937" }}>
                <h2 style={{ fontSize: "18px", margin: "0 0 10px 0" }}>
                  Message
                </h2>
                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  {message ?? "Message inconnu"}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>



      {/* Ne fonctionne pas !! */}

      {/* <main className="bg-gray-100 min-h-screen py-16 flex items-center justify-center">
        <Card className="w-full max-w-lg shadow-xl bg-white rounded-lg">
          <CardHeader className="border-border border-b pb-4 pt-6 rounded-t-lg  bg-secondary">
            <div className="flex items-center justify-center flex-col gap-4">
              <svg
                width="138"
                height="31"
                viewBox="0 0 138 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="py-1"
              >
                <path
                  d="M31.3984 14.5916V24.5967H27.281V1.82951H31.3074V10.4228H31.5121C31.9216 9.45934 32.5547 8.69969 33.4116 8.14385C34.276 7.5806 35.3755 7.29897 36.71 7.29897C37.9232 7.29897 38.981 7.54725 39.8833 8.0438C40.7856 8.54035 41.4832 9.26665 41.9761 10.2227C42.4765 11.1787 42.7268 12.346 42.7268 13.7245V24.5967H38.6094V14.347C38.6094 13.1983 38.3061 12.3052 37.6995 11.6679C37.1005 11.0231 36.2588 10.7007 35.1745 10.7007C34.4466 10.7007 33.7945 10.8564 33.2182 11.1676C32.6495 11.4715 32.2021 11.9124 31.8761 12.4905C31.5576 13.0686 31.3984 13.769 31.3984 14.5916Z"
                  fill="black"
                />
                <path
                  d="M48.8573 31C48.2962 31 47.7768 30.9555 47.2991 30.8666C46.8289 30.7851 46.4536 30.6887 46.173 30.5776L47.1285 27.4426C47.7275 27.6131 48.262 27.6946 48.7322 27.6872C49.2023 27.6798 49.6155 27.5353 49.9719 27.2536C50.3359 26.9794 50.643 26.5199 50.8932 25.8752L51.2458 24.9525L44.9105 7.52131H49.2781L53.3045 20.4168H53.4864L57.5242 7.52131H61.9031L54.9082 26.6644C54.5821 27.5686 54.1499 28.3431 53.6116 28.9879C53.0732 29.64 52.4135 30.1366 51.6325 30.4775C50.8591 30.8258 49.934 31 48.8573 31Z"
                  fill="black"
                />
                <path
                  d="M68.8696 1.82951V24.5967H64.7523V1.82951H68.8696Z"
                  fill="black"
                />
                <path
                  d="M81.8273 7.52131V10.634H71.7842V7.52131H81.8273ZM74.2637 3.43033H78.381V19.4608C78.381 20.0018 78.4644 20.4168 78.6312 20.7058C78.8056 20.9875 79.0331 21.1802 79.3137 21.2839C79.5942 21.3877 79.9051 21.4395 80.2463 21.4395C80.5041 21.4395 80.7392 21.421 80.9515 21.384C81.1714 21.3469 81.3382 21.3136 81.452 21.2839L82.1458 24.43C81.9259 24.5041 81.6112 24.5856 81.2017 24.6745C80.7999 24.7635 80.307 24.8153 79.7231 24.8302C78.6919 24.8598 77.763 24.7079 76.9365 24.3744C76.11 24.0335 75.4541 23.5073 74.9688 22.7958C74.4911 22.0843 74.2561 21.195 74.2637 20.1278V3.43033Z"
                  fill="black"
                />
                <path
                  d="M92.8173 24.9302C91.0657 24.9302 89.553 24.5745 88.2791 23.863C87.0128 23.1441 86.0385 22.1288 85.356 20.817C84.6736 19.4978 84.3324 17.9452 84.3324 16.1591C84.3324 14.4026 84.6736 12.8611 85.356 11.5345C86.046 10.2005 87.009 9.16289 88.245 8.42177C89.481 7.67324 90.933 7.29897 92.6012 7.29897C93.6779 7.29897 94.694 7.46943 95.6494 7.81035C96.6124 8.14385 97.4616 8.66264 98.1971 9.3667C98.9402 10.0708 99.5241 10.9675 99.9487 12.057C100.373 13.139 100.586 14.4286 100.586 15.9256V17.1596H86.2659V14.4471H96.6389C96.6313 13.6763 96.4607 12.9908 96.1271 12.3905C95.7935 11.7828 95.3271 11.3047 94.7281 10.9564C94.1367 10.6081 93.4466 10.4339 92.6581 10.4339C91.8164 10.4339 91.0771 10.634 90.4402 11.0342C89.8032 11.427 89.3066 11.9458 88.9502 12.5906C88.6014 13.2279 88.4232 13.9283 88.4156 14.6916V17.0595C88.4156 18.0526 88.6014 18.9049 88.9729 19.6164C89.3445 20.3205 89.8639 20.8615 90.5311 21.2394C91.1984 21.61 91.9794 21.7953 92.8742 21.7953C93.4732 21.7953 94.0154 21.7138 94.5006 21.5507C94.9859 21.3803 95.4067 21.132 95.7631 20.8059C96.1195 20.4798 96.3887 20.0759 96.5707 19.5942L100.415 20.0166C100.172 21.0097 99.7099 21.8768 99.0274 22.6179C98.3526 23.3516 97.4882 23.9223 96.4342 24.3299C95.3802 24.7301 94.1746 24.9302 92.8173 24.9302Z"
                  fill="black"
                />
                <path
                  d="M111.689 24.9302C109.945 24.9302 108.448 24.556 107.197 23.8074C105.953 23.0589 104.994 22.025 104.319 20.7058C103.652 19.3792 103.318 17.8525 103.318 16.1257C103.318 14.3915 103.659 12.8611 104.342 11.5345C105.024 10.2005 105.987 9.16289 107.231 8.42177C108.482 7.67324 109.961 7.29897 111.667 7.29897C113.085 7.29897 114.34 7.55466 115.431 8.06603C116.531 8.57 117.407 9.28518 118.059 10.2116C118.711 11.1306 119.082 12.2052 119.173 13.4354H115.238C115.079 12.6128 114.7 11.9273 114.101 11.3788C113.509 10.823 112.717 10.5451 111.724 10.5451C110.882 10.5451 110.143 10.7674 109.506 11.2121C108.869 11.6493 108.372 12.2793 108.016 13.1019C107.667 13.9246 107.492 14.9103 107.492 16.059C107.492 17.2226 107.667 18.2231 108.016 19.0606C108.364 19.8906 108.854 20.5317 109.483 20.9838C110.12 21.4284 110.867 21.6508 111.724 21.6508C112.33 21.6508 112.872 21.5396 113.35 21.3173C113.835 21.0875 114.241 20.7577 114.567 20.3279C114.893 19.898 115.117 19.3755 115.238 18.7604H119.173C119.075 19.9684 118.711 21.0393 118.082 21.9732C117.452 22.8996 116.595 23.6259 115.511 24.152C114.427 24.6708 113.153 24.9302 111.689 24.9302Z"
                  fill="black"
                />
                <path
                  d="M126.672 14.5916V24.5967H122.554V1.82951H126.581V10.4228H126.785C127.195 9.45934 127.828 8.69969 128.685 8.14385C129.549 7.5806 130.649 7.29897 131.983 7.29897C133.196 7.29897 134.254 7.54725 135.157 8.0438C136.059 8.54035 136.756 9.26665 137.249 10.2227C137.75 11.1787 138 12.346 138 13.7245V24.5967H133.883V14.347C133.883 13.1983 133.579 12.3052 132.973 11.6679C132.374 11.0231 131.532 10.7007 130.448 10.7007C129.72 10.7007 129.068 10.8564 128.491 11.1676C127.923 11.4715 127.475 11.9124 127.149 12.4905C126.831 13.0686 126.672 13.769 126.672 14.5916Z"
                  fill="black"
                />
                <path d="M7.68884 0H14.6792V24.5967H7.68884V0Z" fill="black" />
                <path d="M0 0L14.6792 0L14.6798 6.64776H0V0Z" fill="black" />
                <path
                  d="M25.2926 3.32388C25.2926 5.15961 23.7277 6.64776 21.7974 6.64776C19.867 6.64776 18.3022 5.15961 18.3022 3.32388C18.3022 1.48815 19.867 0 21.7974 0C23.7277 0 25.2926 1.48815 25.2926 3.32388Z"
                  fill="#702CDC"
                />
              </svg>
            </div>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Détails du message
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-bold">Date: </span>{" "}
                {date ?? "Date inconnue"}
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-bold text-gray-800">Expéditeur</h3>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-bold">Nom: </span>
                {name ?? "Nom inconnu"}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-bold">Email: </span>
                {email ?? "Email inconnu"}
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-bold text-gray-800">Message</h3>
              <p className="text-sm text-gray-600 mt-1">
                {message ?? "Message inconnu"}
              </p>
            </div>

            <Separator />

            <div className="flex justify-center">
              <Link className="w-full" href={`mailto:${email ?? ""}`}>
                <Button variant="default" className="w-full">
                  <Mail className="h-4 w-4" />
                  Répondre à l'email
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main> */}
    </>
  );
}
