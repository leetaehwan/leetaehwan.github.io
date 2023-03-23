---
slug : spring-boot-component-research
title : 스프링 부트 구성요소 살펴보기
authors :
  - name : 이태환
    title : 개발자
    url : https://github.com/leetaehwan
    image_url : https://github.com/leetaehwan.png
  
tags : [data]
---

# 스프링 부트 학습 시작하기

- 백엔드를 배워본 적이 없는 학생이 김영한 스프링 부트 입문 강의를 듣고 작성한 글이다.
- 스프링 부트를 통해서 손쉽게 스프링 프레임워크를 활용한 웹 어플리케이션 서버를 만든다.
- 클라이언트 사이드인 웹 브라우저가 보내는 요청을 내장 톰캣 서버를 통해 스프링 컨테이너에서 처리하여 반환 시킨다.

# 스프링 부트 구성요소 톺아보기

## 내장 톰캣 서버
- 아파치 소프트웨어 재단에서 만든 WAS, 웹 어플리케이션이다.
- 자바 서블릿과 JSP, JavaServer Pages를 실행할 수 있는 환경을 제공한다.
- Jakarta Servlet, Jakata Server Pages, Jakarta Expression Language 등의 사양을 구현한 오픈소스 소프트웨어이다.

### 아파치와 톰캣의 차이점
- 아파치 소프트웨어 재단의 아파치 웹 서버이다.
- 정적 데이터인 HTML, CSS, 이미지 등을 처리하는데 빠르지만
- 톰캣은 WAS로서 JSP, 서블릿 처리, DB 연결 및 데이터 조작 등의 동적인 데이터를 처리하는데 적합하다.

## 정적 / 동적 데이터

### 정적 데이터
- 사용자의 요청에 따라 변하지 않는 데이터이다.
- HTML, CSS, 이미지 파일과 같은 데이터를 말하며, 정적인 데이터는 웹 서버를 통해서 처리된다.

### 동적 데이터
- 사용자의 요청에 따라 변하는 데이터를 의미한다.
- 사용자가 입력한 정보를 바탕으로 DB에서 정보를 검색하거나 조작하여 반환되는 데이터들을 말한다.
- 이러한 동적 데이터는 WAS에서 처리된다.

## 웹 서버와 웹 어플리케이션 서버, WAS와의 차이점

# 스프링 컨테이너와 빈
- 스프링에서, 어플리케이션의 중추를 구성하는 객체와 스프링 Ioc 컨테이너에서 관리되는 객체들을 빈이라고 한다.
- 빈은 간단히 구체화된 객체로 스프링 IoC 컨테이너에 의해 조립되거나 관리되어진다.
- 이런 빈과 그것들 간의 의존관계가 컨테이너에서 사용하는 Configuration 메타데이터에 반영된다.

## 컨테이너

### BeanFactory
- org.springframework.beans.factory.BeanFactory는 스프링 IoC 컨테이너의 실체의 대표이다.
- 스프링 IoC 컨테이너는 앞서 언급했던 빈들을 담거나 관리하는 책임이 있다.
- BeanFractory 인터페이스는 스프링의 중심 IoC 컨테이너 인터페이스이다. 
- 스프링으로 바로 제공되어지는 BeanFactory 인터페이스의다양한 구현들이 있다.
- 가장 많이 쓰이는 구현이 XmlBeanFactory 클래스이다.
- 이 구현은 우리가 앱을 구성하는 객체들과 의심할 여지없이 많은 객채들 간의 상호 의존관계를 XML의 언어로 표현하도록 한다.
- XmlBeanFactory는 XML Configuration 메타데이터를 취해서 완전하게 환경설정된 시스템이나 앱을 만드는데 사용한다.

![](https://docs.spring.io/spring-framework/docs/3.0.0.M3/reference/html/images/container-magic.png)
[4.2 Basics - containers and beans](https://docs.spring.io/spring-framework/docs/3.0.0.M3/reference/html/ch04s02.html)

### ApplicationContext
- ApplicationContext 인터페이스도 스프링 IoC 컨테이너를 대표하고 구현, 환경설정, 빈을 조합하는 역할을 수행한다.
- BeanFactory의 대체 인터페이스로 더 많은 기업에 특화된 기능들을 제공한다.
- 제공되는 기능으로 메시지 확인(다국언어 지원), 이벤트 게시, 어플리케이션 레이어 특화 문맥이 있다.
- 어플리케이션 컴포넌트에 접근할 때 사용하는 ListableBeanFactory 메서드를 상속 받았고
- 일반적인 방법으로 파일 리스소를 읽는 기능을 ResourceLoader로부터 상속 받았다.
- ApplicationEventPublisher로부터 상속받은 등록된 리스너들의 이벤트를 게시하는 능력도 가지고 있다.

## 컨트롤러란 무엇인가?
- 전형적인 MVC, Model-View-Controller 아키텍처에서 Controller의 개념을 들여다보자.

### 컨트롤러의 역할
- 들어오는 응답을 가로챈다.
- 응답의 내용을 데이터 내부 체계로 변환시킨다.
- 추가의 처리를 위한 모델에 데이터를 보낸다.
- 모델로부터 처리된 데이터를 얻어와 렌더링을 위해 해당 데이터를 뷰로 전달한다.

**스프링 MVC 다이어그램**
![](./dispatching-servlet.png)

- 여기서 발송 서블릿이 아키텍처에서 Front 컨트롤러의 역할을 수행한다.
- 위 MCV 다이어그램이 전형적인 MCV 컨트롤러 뿐만아니라 RESTful 컨트롤러에 해당된다. (약간만 다르다.)
- 전통적인 접근법으로 MVC 어플리케이션은 서비스 지향이 아니라서 뷰 리졸버를 통해 컨트롤러로부터 얻어낸 데이터를 기반으로 최종 뷰를 렌더링한다.
- RESTful 어플리케이션은 서비스 지향으로 디자인되어서 원본 데이터(주로 JSON)을 반환한다.
- 이러한 어플리케이션이 어떠한 뷰 렌더링도 하지 않기 때문에, 뷰 리졸버가 존재하지 않는다.
- 그래서 컨트롤러가 일반적으로 직접 HTTP 응답을 통해 데이터를 전송할 것으로 기대한다.
[출처](https://www.baeldung.com/spring-controllers)

# Maven Dependencies
- Maven은 빌드 자동화 도구로 주로 자바 프로젝트에서 쓰인다.
- 스프링에서는 Maven이 의존성들을 구성하고 프로젝트를 빌드하는데 사용된다.
- 다음은 스프링 부트에서 스프링 MVC로 동작하기 위해서 Maven 의존성을 다뤄본다.
```
<dependency>
	<groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>3.0.2</version>
</dependency>
```

# 스프링 부트 Web Config
- 스프링 부트에서 어떻게 구성하는지 들여다보자.
- 클래서 경로에 thymeleaf 의존성을 추가했기 때문에, 이를 위한 어떤 @Beans도 구성할 필요가 없습니다.
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```
- WebConfig에서 기본 설정 서블릿과 Greeting 객체와 오브젝트 매퍼를 위한 빈을 가능하도록 추가해준다.
```
@Bean
public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> enableDefaultServlet(){
	return factory -> factory.setRegisterDefaultServlet(true);
}

@Bean
public Greeting greeting() {
	Greeting greeting = new Greeting();
	greeting.setMessage("Hello World !!");
	return greeting;
}

@Bean
public ObjectMapper objectMapper() {
return new ObejctMapper();
}
```
- 예를들어, 만약 컨트롤러가 "welcome" 이름의 뷰를 반환하면, 뷰 리졸버는 템플릿 폴더 안에 "welcome.html"이라 불리는 페이지를 처리한다.
- 템플릿 폴더가 thymeleaf가 뷰를 찾도록 기본 설정된 폴더이다.

# MVC 컨트롤러
- MVC 스타일의 컨트롤러를 구현하자
- 어떻게 ModelAndView 객체를 반환하는지 주목하자.
- ModelAndView 객체는 모델 맵과 뷰 객체를 포함하고 둘다 뷰 리졸버에서 데이터 렌더링에 사용된다.

```
@Controller
@RequestMapping(value= "/test")
public class TestController {
	@GetMapping
	public ModelAndView getTestData() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("welcome");
		mv.getModel().put("data", "Welcome Home man");
		return mv;
	}
}
```
- 여기까지 정확하게 구축한게 여기있다.
- 먼저 TestController라고 불리는 컨테이너를 만들고 그것을 "/test" 경로에 매핑했다.
- 클래스에서, ModelAndView 객체를 반환하는 메서드를 만들고
- GET 요청을 통해서 메서드를 패밍하여 "test"로 끝나는 URL 호출이 발송 서블릿으로 라우팅되어 TestContoller의 getTestData 메서드로 전달됩니다.

- 물론 ModelAndView 객체에 추가로 몇몇 모델 데이터도 반환한다.
- 뷰 객체는 "welcome"으로 설정되었고 위에서 언급한대로, 뷰 리졸버가 템플릿 폴더 안에 'welcome.html'으로 불리는 페이지를 찾는다.

# REST 컨트롤러
- 스프링 RESTful 어플리케이션 구축은 MVC어플리케이션의 것과 뷰리졸버와 모델 맵이 없다는 것 빼고는 같다.
- API가 간단히 JSON과 같은 방식의 원본 데이터로 클라이언트에게 반환한다.
- 그래서 발송 서블릿이 뷰 리졸버를 우회하여 HTTP 응답 바디의 데이터를 바로 반환한다.
- 간단한 RESTful controller의 구현을 보자.
```
@RestContorller
public class Restcontroller {
	@GetMapping(value = "/student/{studentId}")
	public Student getTestData(@PathVariable Integer studentId) {
		Student student = new Student();
		student.setName("Peter");
		student.setId(student.ID);
		return student;
	}
}
```