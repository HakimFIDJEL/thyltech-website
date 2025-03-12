"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import { FadeInComponent } from "../components/FadeInComponent";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function Hero() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    // Left
    <section className="relative overflow-hidden bg-background  flex items-center justify-end flex-col">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 z-0">
        <svg
          className="absolute h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div> */}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-1 py-40 border-l border-r border-border flex justify-between items-center gap-8">
        <div className="max-w-full sm:max-w-3xl">
          <FadeInComponent>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Recherche de Projet de Fin d’Études d’Ingénieur.
            </h1>
          </FadeInComponent>
          <FadeInComponent delay={200}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Dans le domaine du sport et de la santé.  <br />
            Pour des sujets autour des systèmes embarqués, de l’intelligence artificielle ou du développement logiciel.
            </p>
          </FadeInComponent>
          <FadeInComponent delay={400}>
            <div className="mt-10 flex items-start gap-x-6 flex-col sm:flex-row gap-y-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#projet">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto "
              >
                <a href="#contact">
                  Nous contacter
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeInComponent>
        </div>
      </div>

      <div className="w-full  relative z-1 border-b border-t border-border ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container border-l border-r border-border py-8">
          <FadeInComponent delay={600}>
            <div className="flex justify-center flex-col gap-8 xl:flex-row xl:gap-16">
              <div className="flex items-center flex-col gap-y-2">
                {theme === "dark" ? (
                  <Image
                    src="/images/ig2i_white.png"
                    alt="School Logo"
                    width={300}
                    height={100}
                    className="h-24 w-auto object-contain"
                  />
                ) : (
                  <Image
                    src="/images/ig2i.png"
                    alt="School Logo"
                    width={300}
                    height={100}
                    className="h-24 w-auto object-contain"
                  />
                )}
              </div>
              <Separator
                orientation="vertical"
                className="h-100 hidden xl:block"
              />
              <Separator
                orientation="horizontal"
                className="w-full block xl:hidden"
              />
              <div className="flex items-center flex-col gap-y-2">
                {theme === "dark" ? (
                  <Image
                    src="/images/cti_white.png"
                    alt="CTI Logo"
                    width={300}
                    height={100}
                    className="h-24 w-auto object-contain"
                  />
                ) : (
                  <Image
                    src="/images/cti.png"
                    alt="CTI Logo"
                    width={300}
                    height={100}
                    className="h-24 w-auto object-contain"
                  />
                )}
              </div>
              <Separator
                orientation="vertical"
                className="h-100 hidden xl:block"
              />
              <Separator
                orientation="horizontal"
                className="w-full block xl:hidden"
              />
              <div className="flex items-center flex-col gap-y-2 align-middle justify-center">
                {theme === "dark" ? (
                  <svg
                    width="221"
                    height="76"
                    viewBox="0 0 221 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M88.2436 28.4755V24.9146H106.836V28.4755H99.6333V48.3636H95.4461V28.4755H88.2436Z"
                      fill="white"
                    />
                    <path
                      d="M114.357 38.0589V48.3636H110.238V24.9146H114.266V33.7652H114.471C114.88 32.7729 115.514 31.9905 116.371 31.418C117.236 30.8379 118.335 30.5479 119.671 30.5479C120.884 30.5479 121.942 30.8036 122.845 31.315C123.748 31.8264 124.446 32.5745 124.939 33.5591C125.439 34.5438 125.69 35.746 125.69 37.1658V48.3636H121.571V37.807C121.571 36.6239 121.267 35.7041 120.66 35.0476C120.061 34.3835 119.219 34.0515 118.134 34.0515C117.406 34.0515 116.754 34.2118 116.177 34.5324C115.608 34.8453 115.161 35.2995 114.835 35.8949C114.516 36.4903 114.357 37.2116 114.357 38.0589Z"
                      fill="white"
                    />
                    <path
                      d="M131.823 54.9587C131.261 54.9587 130.742 54.9129 130.264 54.8213C129.793 54.7373 129.418 54.6381 129.137 54.5236L130.093 51.2948C130.692 51.4703 131.227 51.5543 131.697 51.5467C132.168 51.539 132.581 51.3902 132.938 51.1001C133.302 50.8177 133.609 50.3444 133.859 49.6804L134.212 48.73L127.874 30.7769H132.244L136.271 44.0585H136.453L140.493 30.7769H144.873L137.876 50.4933C137.55 51.4245 137.117 52.2222 136.579 52.8863C136.04 53.558 135.38 54.0694 134.599 54.4205C133.825 54.7793 132.9 54.9587 131.823 54.9587Z"
                      fill="white"
                    />
                    <path
                      d="M151.843 24.9146V48.3636H147.724V24.9146H151.843Z"
                      fill="white"
                    />
                    <path
                      d="M164.805 30.7769V33.9828H154.758V30.7769H164.805ZM157.239 26.5634H161.358V43.0739C161.358 43.6311 161.441 44.0585 161.608 44.3562C161.783 44.6463 162.01 44.8448 162.291 44.9516C162.571 45.0585 162.882 45.1119 163.224 45.1119C163.482 45.1119 163.717 45.0928 163.929 45.0547C164.149 45.0165 164.316 44.9821 164.43 44.9516L165.124 48.1919C164.904 48.2682 164.589 48.3522 164.18 48.4438C163.778 48.5354 163.284 48.5888 162.7 48.6041C161.669 48.6346 160.74 48.4781 159.913 48.1346C159.086 47.7835 158.43 47.2416 157.944 46.5088C157.466 45.776 157.231 44.86 157.239 43.7608V26.5634Z"
                      fill="white"
                    />
                    <path
                      d="M175.8 48.7071C174.047 48.7071 172.534 48.3407 171.26 47.608C169.993 46.8675 169.018 45.8218 168.336 44.4707C167.653 43.112 167.311 41.5129 167.311 39.6733C167.311 37.8642 167.653 36.2765 168.336 34.9102C169.026 33.5362 169.989 32.4676 171.226 31.7043C172.462 30.9333 173.915 30.5479 175.583 30.5479C176.661 30.5479 177.677 30.7234 178.633 31.0746C179.596 31.418 180.446 31.9524 181.182 32.6775C181.925 33.4027 182.509 34.3263 182.934 35.4483C183.359 36.5628 183.571 37.891 183.571 39.4328V40.7038H169.246V37.91H179.623C179.615 37.1162 179.445 36.4101 179.111 35.7918C178.777 35.1659 178.31 34.6736 177.711 34.3148C177.12 33.9561 176.429 33.7767 175.64 33.7767C174.798 33.7767 174.059 33.9828 173.422 34.395C172.784 34.7995 172.288 35.3339 171.931 35.9979C171.582 36.6544 171.404 37.3757 171.396 38.1619V40.6007C171.396 41.6236 171.582 42.5014 171.954 43.2342C172.326 43.9593 172.845 44.5165 173.513 44.9058C174.18 45.2875 174.961 45.4783 175.857 45.4783C176.456 45.4783 176.998 45.3943 177.484 45.2264C177.969 45.0509 178.39 44.7951 178.747 44.4593C179.103 44.1234 179.372 43.7074 179.555 43.2113L183.4 43.6463C183.158 44.6692 182.695 45.5623 182.012 46.3256C181.337 47.0813 180.472 47.669 179.418 48.0888C178.364 48.501 177.157 48.7071 175.8 48.7071Z"
                      fill="white"
                    />
                    <path
                      d="M194.679 48.7071C192.934 48.7071 191.436 48.3217 190.185 47.5507C188.941 46.7798 187.981 45.7149 187.306 44.3562C186.638 42.9899 186.305 41.4175 186.305 39.6389C186.305 37.8528 186.646 36.2765 187.329 34.9102C188.011 33.5362 188.975 32.4676 190.219 31.7043C191.47 30.9333 192.95 30.5479 194.656 30.5479C196.075 30.5479 197.33 30.8112 198.423 31.3379C199.522 31.857 200.399 32.5935 201.051 33.5477C201.703 34.4942 202.075 35.601 202.166 36.8681H198.229C198.07 36.0208 197.691 35.3148 197.091 34.7499C196.5 34.1774 195.707 33.8912 194.713 33.8912C193.871 33.8912 193.132 34.1202 192.494 34.5782C191.857 35.0285 191.36 35.6773 191.004 36.5246C190.655 37.3719 190.481 38.3871 190.481 39.5702C190.481 40.7686 190.655 41.7991 191.004 42.6617C191.353 43.5166 191.842 44.1769 192.472 44.6425C193.109 45.1005 193.856 45.3295 194.713 45.3295C195.32 45.3295 195.862 45.215 196.34 44.986C196.826 44.7493 197.232 44.4097 197.558 43.9669C197.884 43.5242 198.108 42.9861 198.229 42.3525H202.166C202.067 43.5967 201.703 44.6997 201.074 45.6615C200.444 46.6156 199.587 47.3637 198.502 47.9056C197.418 48.44 196.143 48.7071 194.679 48.7071Z"
                      fill="white"
                    />
                    <path
                      d="M209.667 38.0589V48.3636H205.548V24.9146H209.576V33.7652H209.781C210.191 32.7729 210.824 31.9905 211.681 31.418C212.546 30.8379 213.646 30.5479 214.981 30.5479C216.195 30.5479 217.253 30.8036 218.155 31.315C219.058 31.8264 219.756 32.5745 220.249 33.5591C220.75 34.5438 221 35.746 221 37.1658V48.3636H216.881V37.807C216.881 36.6239 216.578 35.7041 215.971 35.0476C215.372 34.3835 214.53 34.0515 213.445 34.0515C212.717 34.0515 212.064 34.2118 211.488 34.5324C210.919 34.8453 210.471 35.2995 210.145 35.8949C209.826 36.4903 209.667 37.2116 209.667 38.0589Z"
                      fill="white"
                    />
                    <path d="M23.0757 0H44.0551V76H23.0757V0Z" fill="white" />
                    <path
                      d="M0 0L44.0551 0L44.0566 20.5405H0V0Z"
                      fill="white"
                    />
                    <path
                      d="M75.9069 10.2703C75.9069 15.9424 71.2105 20.5405 65.4172 20.5405C59.624 20.5405 54.9276 15.9424 54.9276 10.2703C54.9276 4.59816 59.624 0 65.4172 0C71.2105 0 75.9069 4.59816 75.9069 10.2703Z"
                      fill="#702CDC"
                    />
                  </svg>
                ) : (
                  <svg
                    width="221"
                    height="75"
                    viewBox="0 0 221 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M88.2436 28.1008V24.5868H106.836V28.1008H99.6333V47.7273H95.4461V28.1008H88.2436Z"
                      fill="black"
                    />
                    <path
                      d="M114.357 37.5581V47.7273H110.238V24.5868H114.266V33.321H114.471C114.88 32.3417 115.514 31.5696 116.371 31.0046C117.236 30.4322 118.335 30.1459 119.671 30.1459C120.884 30.1459 121.942 30.3983 122.845 30.903C123.748 31.4076 124.446 32.1459 124.939 33.1176C125.439 34.0893 125.69 35.2757 125.69 36.6768V47.7273H121.571V37.3095C121.571 36.142 121.267 35.2343 120.66 34.5865C120.061 33.9311 119.219 33.6034 118.134 33.6034C117.406 33.6034 116.754 33.7616 116.177 34.078C115.608 34.3868 115.161 34.835 114.835 35.4226C114.516 36.0101 114.357 36.722 114.357 37.5581Z"
                      fill="black"
                    />
                    <path
                      d="M131.823 54.2355C131.261 54.2355 130.742 54.1903 130.264 54.0999C129.793 54.0171 129.418 53.9192 129.137 53.8062L130.093 50.6198C130.692 50.7931 131.227 50.8759 131.697 50.8684C132.168 50.8609 132.581 50.714 132.938 50.4277C133.302 50.149 133.609 49.682 133.859 49.0267L134.212 48.0888L127.874 30.3719H132.244L136.271 43.4788H136.453L140.493 30.3719H144.873L137.876 49.8289C137.55 50.7479 137.117 51.5351 136.579 52.1904C136.04 52.8533 135.38 53.358 134.599 53.7045C133.825 54.0585 132.9 54.2355 131.823 54.2355Z"
                      fill="black"
                    />
                    <path
                      d="M151.843 24.5868V47.7273H147.724V24.5868H151.843Z"
                      fill="black"
                    />
                    <path
                      d="M164.805 30.3719V33.5356H154.758V30.3719H164.805ZM157.239 26.2138H161.358V42.5071C161.358 43.057 161.441 43.4788 161.608 43.7726C161.783 44.0588 162.01 44.2547 162.291 44.3601C162.571 44.4656 162.882 44.5183 163.224 44.5183C163.482 44.5183 163.717 44.4995 163.929 44.4618C164.149 44.4242 164.316 44.3903 164.43 44.3601L165.124 47.5578C164.904 47.6331 164.589 47.716 164.18 47.8064C163.778 47.8968 163.284 47.9495 162.7 47.9646C161.669 47.9947 160.74 47.8403 159.913 47.5013C159.086 47.1548 158.43 46.62 157.944 45.8968C157.466 45.1737 157.231 44.2698 157.239 43.185V26.2138Z"
                      fill="black"
                    />
                    <path
                      d="M175.8 48.0662C174.047 48.0662 172.534 47.7047 171.26 46.9815C169.993 46.2509 169.018 45.2189 168.336 43.8856C167.653 42.5448 167.311 40.9667 167.311 39.1513C167.311 37.366 167.653 35.7992 168.336 34.4509C169.026 33.095 169.989 32.0404 171.226 31.2871C172.462 30.5263 173.915 30.1459 175.583 30.1459C176.661 30.1459 177.677 30.3192 178.633 30.6657C179.596 31.0046 180.446 31.5319 181.182 32.2475C181.925 32.9632 182.509 33.8746 182.934 34.9819C183.359 36.0817 183.571 37.3924 183.571 38.914V40.1682H169.246V37.4112H179.623C179.615 36.6278 179.445 35.931 179.111 35.3209C178.777 34.7032 178.31 34.2174 177.711 33.8633C177.12 33.5093 176.429 33.3323 175.64 33.3323C174.798 33.3323 174.059 33.5356 173.422 33.9424C172.784 34.3416 172.288 34.8689 171.931 35.5243C171.582 36.1721 171.404 36.8839 171.396 37.6598V40.0665C171.396 41.0759 171.582 41.9421 171.954 42.6653C172.326 43.3809 172.845 43.9308 173.513 44.315C174.18 44.6916 174.961 44.8799 175.857 44.8799C176.456 44.8799 176.998 44.797 177.484 44.6313C177.969 44.4581 178.39 44.2057 178.747 43.8743C179.103 43.5428 179.372 43.1323 179.555 42.6427L183.4 43.0721C183.158 44.0814 182.695 44.9628 182.012 45.716C181.337 46.4618 180.472 47.0418 179.418 47.4561C178.364 47.8629 177.157 48.0662 175.8 48.0662Z"
                      fill="black"
                    />
                    <path
                      d="M194.679 48.0662C192.934 48.0662 191.436 47.6858 190.185 46.925C188.941 46.1642 187.981 45.1134 187.306 43.7726C186.638 42.4242 186.305 40.8725 186.305 39.1174C186.305 37.3547 186.646 35.7992 187.329 34.4509C188.011 33.095 188.975 32.0404 190.219 31.2871C191.47 30.5263 192.95 30.1459 194.656 30.1459C196.075 30.1459 197.33 30.4058 198.423 30.9256C199.522 31.4378 200.399 32.1647 201.051 33.1063C201.703 34.0403 202.075 35.1326 202.166 36.383H198.229C198.07 35.5469 197.691 34.8501 197.091 34.2927C196.5 33.7277 195.707 33.4452 194.713 33.4452C193.871 33.4452 193.132 33.6712 192.494 34.1232C191.857 34.5676 191.36 35.2079 191.004 36.044C190.655 36.8802 190.481 37.882 190.481 39.0496C190.481 40.2322 190.655 41.2491 191.004 42.1003C191.353 42.944 191.842 43.5956 192.472 44.0551C193.109 44.507 193.856 44.733 194.713 44.733C195.32 44.733 195.862 44.62 196.34 44.394C196.826 44.1605 197.232 43.8253 197.558 43.3884C197.884 42.9515 198.108 42.4205 198.229 41.7953H202.166C202.067 43.0231 201.703 44.1116 201.074 45.0607C200.444 46.0023 199.587 46.7405 198.502 47.2753C197.418 47.8026 196.143 48.0662 194.679 48.0662Z"
                      fill="black"
                    />
                    <path
                      d="M209.667 37.5581V47.7273H205.548V24.5868H209.576V33.321H209.781C210.191 32.3417 210.824 31.5696 211.681 31.0046C212.546 30.4322 213.646 30.1459 214.981 30.1459C216.195 30.1459 217.253 30.3983 218.155 30.903C219.058 31.4076 219.756 32.1459 220.249 33.1176C220.75 34.0893 221 35.2757 221 36.6768V47.7273H216.881V37.3095C216.881 36.142 216.578 35.2343 215.971 34.5865C215.372 33.9311 214.53 33.6034 213.445 33.6034C212.717 33.6034 212.064 33.7616 211.488 34.078C210.919 34.3868 210.471 34.835 210.145 35.4226C209.826 36.0101 209.667 36.722 209.667 37.5581Z"
                      fill="black"
                    />
                    <path d="M23.0757 0H44.0551V75H23.0757V0Z" fill="black" />
                    <path
                      d="M0 0L44.0551 0L44.0566 20.2703H0V0Z"
                      fill="black"
                    />
                    <path
                      d="M75.9069 10.1351C75.9069 15.7326 71.2105 20.2703 65.4172 20.2703C59.624 20.2703 54.9276 15.7326 54.9276 10.1351C54.9276 4.53765 59.624 0 65.4172 0C71.2105 0 75.9069 4.53765 75.9069 10.1351Z"
                      fill="#702CDC"
                    />
                  </svg>
                )}
              </div>
            </div>
          </FadeInComponent>
        </div>
      </div>
    </section>
  );
}
