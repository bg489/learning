window.QUESTION_BANK = [
  {
    "id": 1,
    "question": "Which method is typically used to load assets or files in Flutter?",
    "options": [
      "get()",
      "read()",
      "fetch()",
      "load()"
    ],
    "answer": 3,
    "explanation": "rootBundle.load('assets/data.json') dùng để tải file asset trong Flutter.",
    "category": "Data, API & Storage"
  },
  {
    "id": 2,
    "question": "What is Flutter primarily used for?",
    "options": [
      "Designing databases for mobile apps",
      "Creating native applications from a single codebase",
      "Developing server-side applications only",
      "Building operating systems for mobile devices"
    ],
    "answer": 1,
    "explanation": "Flutter cho phép build app Android, iOS, Web, Desktop từ 1 codebase Dart duy nhất.",
    "category": "Flutter Essentials"
  },
  {
    "id": 3,
    "question": "Why should state be kept as local as possible?",
    "options": [
      "Better animations",
      "Reduce unnecessary rebuilds",
      "Simplify Ul",
      "Improve navigation"
    ],
    "answer": 1,
    "explanation": "State càng local thì khi rebuild chỉ ảnh hưởng widget nhỏ, không rebuild cả cây widget.",
    "category": "State Management"
  },
  {
    "id": 4,
    "question": "Which command builds a release APK?",
    "options": [
      "flutter run",
      "flutter build apk",
      "flutter doctor",
      "flutter clean"
    ],
    "answer": 1,
    "explanation": "Lệnh chuẩn để build file APK release.",
    "category": "Flutter Essentials"
  },
  {
    "id": 5,
    "question": "Which Flutter command runs the app on a connected device in debug mode?",
    "options": [
      "flutter run",
      "flutter build apk",
      "flutter doctor",
      "flutter clean"
    ],
    "answer": 0,
    "explanation": "Compile và chạy app trực tiếp trên device/emulator với hot reload enabled.",
    "category": "Flutter CLI & Tools"
  },
  {
    "id": 6,
    "question": "Which Flutter command checks your development environment setup?",
    "options": [
      "flutter run",
      "flutter build apk",
      "flutter doctor",
      "flutter clean"
    ],
    "answer": 2,
    "explanation": "Quét và báo cáo trạng thái cài đặt của Flutter SDK, Android toolchain, IDE plugins,...",
    "category": "Flutter CLI & Tools"
  },
  {
    "id": 7,
    "question": "Which Dart feature supports objectoriented programming?",
    "options": [
      "Widgets",
      "Classes and objects",
      "Hot reload",
      "Layout builders"
    ],
    "answer": 1,
    "explanation": "(Dart là ngôn ngữ OOP, sử dụng class và object làm nền tảng.)",
    "category": "Dart Fundamentals"
  },
  {
    "id": 8,
    "question": "Which method retrieves data from SharedPreferences?",
    "options": [
      "get()",
      "read()",
      "fetch()",
      "load()"
    ],
    "answer": 0,
    "explanation": "SharedPreferences dùng getString(), getInt(),... tức là các biến thể của get().",
    "category": "Forms & Authentication"
  },
  {
    "id": 9,
    "question": "Which method from flutter_secure_storage reads encrypted data?",
    "options": [
      "get()",
      "read()",
      "fetch()",
      "load()"
    ],
    "answer": 1,
    "explanation": "flutter_secure_storage dùng await storage.read(key: 'token') để đọc dữ liệu mã hóa.",
    "category": "Forms & Authentication"
  },
  {
    "id": 10,
    "question": "Which method is commonly used in HTTP packages to retrieve data from an API?",
    "options": [
      "get()",
      "read()",
      "fetch()",
      "load()"
    ],
    "answer": 2,
    "explanation": "Trong Fetch API (JS) hoặc một số Dart package, fetch() được dùng để gọi HTTP request lấy dữ liệu.",
    "category": "Data, API & Storage"
  },
  {
    "id": 11,
    "question": "Which Flutter command removes build artifacts and cache to fix build issues?",
    "options": [
      "flutter run",
      "flutter build apk",
      "flutter doctor",
      "flutter clean"
    ],
    "answer": 3,
    "explanation": "Xóa thư mục .dart_tool, build/ để buộc Flutter build lại từ đầu.",
    "category": "Flutter CLI & Tools"
  },
  {
    "id": 12,
    "question": "What happens after successful login?",
    "options": [
      "App closes",
      "User session starts",
      "Theme changes",
      "Navigation resets"
    ],
    "answer": 1,
    "explanation": "Sau đăng nhập thành công, session người dùng được khởi tạo để duy trì trạng thái đăng nhập.",
    "category": "Forms & Authentication"
  },
  {
    "id": 13,
    "question": "What is implicit animation?",
    "options": [
      "Manual animation control",
      "Animation without controller",
      "API animation",
      "Navigation animation"
    ],
    "answer": 1,
    "explanation": "Implicit animation (như AnimatedContainer) tự động animate khi property thay đổi, không cần AnimationController.",
    "category": "Animation & Performance"
  },
  {
    "id": 14,
    "question": "Which Flutter concept supports reactive Ul updates?",
    "options": [
      "Manual refresh",
      "Widget rebuilding",
      "Hot restart",
      "Native callbacks"
    ],
    "answer": 1,
    "explanation": "Khi state thay đổi, Flutter rebuild widget tương ứng — đây là mô hình reactive của Flutter.",
    "category": "State Management"
  },
  {
    "id": 15,
    "question": "Which development technique requires the developer to explicitly call UI update methods?",
    "options": [
      "Manual refresh",
      "Widget rebuilding",
      "Hot restart",
      "Native callbacks"
    ],
    "answer": 0,
    "explanation": "Trong lập trình imperative (Android XML/View), dev phải gọi setText(), notifyDataSetChanged() thủ công.",
    "category": "Dart Fundamentals"
  },
  {
    "id": 16,
    "question": "Which Flutter developer tool completely restarts the app and clears all state?",
    "options": [
      "Manual refresh",
      "Widget rebuilding",
      "Hot restart",
      "Native callbacks"
    ],
    "answer": 2,
    "explanation": "Khác hot reload ở chỗ nó reset Dart VM và state về ban đầu.",
    "category": "State Management"
  },
  {
    "id": 17,
    "question": "Which Flutter mechanism allows communication between Dart code and native Android/iOS code?",
    "options": [
      "Manual refresh",
      "Widget rebuilding",
      "Hot restart",
      "Native callbacks"
    ],
    "answer": 3,
    "explanation": "Platform Channel cho phép Dart gọi native code (Java/Kotlin/Swift/ObjC) và nhận kết quả qua callback.",
    "category": "Forms & Authentication"
  },
  {
    "id": 18,
    "question": "Why is clean architecture beneficial?",
    "options": [
      "Fewer files",
      "Easier maintenance and testing",
      "Better UI",
      "Faster builds"
    ],
    "answer": 1,
    "explanation": "Clean architecture tách biệt các layer (UI, domain, data) giúp dễ test và bảo trì.",
    "category": "Testing & Architecture"
  },
  {
    "id": 19,
    "question": "What is Dart primarily designed for in the Flutter ecosystem?",
    "options": [
      "Database management",
      "User interface development",
      "General-purpose programming with UI focus",
      "Network security"
    ],
    "answer": 2,
    "explanation": "Dart là ngôn ngữ đa dụng nhưng được tối ưu cho việc xây dựng UI trong Flutter.",
    "category": "Flutter Essentials"
  },
  {
    "id": 20,
    "question": "What is the benefit of composing widgets in Flutter?",
    "options": [
      "Faster compilation",
      "Better code reuse and UI consistencу",
      "Reduced memory usage",
      "Automatic navigation"
    ],
    "answer": 1,
    "explanation": "Widget composition giúp tái sử dụng component và đảm bảo giao diện nhất quán.",
    "category": "Widgets & UI"
  },
  {
    "id": 21,
    "question": "Which Flutter test focuses on UI components?",
    "options": [
      "Unit test",
      "Widget test",
      "Integration test",
      "Load test"
    ],
    "answer": 1,
    "explanation": "Widget test kiểm tra từng widget riêng lẻ trong môi trường test, không cần device thật.",
    "category": "Testing & Architecture"
  },
  {
    "id": 22,
    "question": "Why are const widgets recommended?",
    "options": [
      "They improve readability",
      "They reduce rebuild cost",
      "They add state",
      "They handle navigation"
    ],
    "answer": 1,
    "explanation": "const widget được tạo tại compile-time và không bao giờ rebuild, tiết kiệm tài nguyên.",
    "category": "Animation & Performance"
  },
  {
    "id": 23,
    "question": "What happens if a non-nullable variable is not initialized in Dart?",
    "options": [
      "The app runs normally",
      "A runtime exception occurs",
      "A compile-time error occurs",
      "The value becomes null automatically"
    ],
    "answer": 2,
    "explanation": "Dart null safety bắt buộc khởi tạo non-nullable variable, vi phạm sẽ bị lỗi compile.",
    "category": "Dart Fundamentals"
  },
  {
    "id": 24,
    "question": "What is the main risk of improper state management?",
    "options": [
      "Ul inconsistency",
      "Longer compile time",
      "Package conflicts",
      "Build errors"
    ],
    "answer": 0,
    "explanation": "Quản lý state sai dẫn đến UI hiển thị không đồng bộ với dữ liệu thực tế.",
    "category": "State Management"
  },
  {
    "id": 25,
    "question": "What is technical debt?",
    "options": [
      "Ul lag",
      "Future cost of poor design decisions",
      "Memory usage",
      "API limit"
    ],
    "answer": 1,
    "explanation": "Technical debt là chi phí (thời gian, công sức) phải trả sau này do các quyết định thiết kế tồi trước đó.",
    "category": "Testing & Architecture"
  },
  {
    "id": 26,
    "question": "What does golden testing verify?",
    "options": [
      "API responses",
      "UI appearance consistency",
      "Database state",
      "Authentication"
    ],
    "answer": 1,
    "explanation": "Golden test so sánh screenshot của widget với ảnh \"vàng\" (chuẩn) để phát hiện thay đổi giao diện.",
    "category": "Testing & Architecture"
  },
  {
    "id": 27,
    "question": "Which Flutter tool helps debug network requests?",
    "options": [
      "DevTools",
      "Inspector",
      "Emulator",
      "Hot reload"
    ],
    "answer": 0,
    "explanation": "Flutter DevTools có Network tab để theo dõi và debug các HTTP request.",
    "category": "Data, API & Storage"
  },
  {
    "id": 28,
    "question": "Which Flutter DevTools feature allows you to inspect the widget tree and layout?",
    "options": [
      "DevTools Network tab",
      "Widget Inspector",
      "Emulator",
      "Hot reload"
    ],
    "answer": 1,
    "explanation": "Hiển thị cây widget dạng visual, cho phép click để xem size, padding, constraints của widget.",
    "category": "Flutter CLI & Tools"
  },
  {
    "id": 29,
    "question": "Which Flutter feature allows code changes to appear instantly without losing the current app state?",
    "options": [
      "DevTools",
      "Inspector",
      "Emulator",
      "Hot reload"
    ],
    "answer": 3,
    "explanation": "Inject code mới vào Dart VM, rebuild widget tree, giữ nguyên state hiện tại.",
    "category": "State Management"
  },
  {
    "id": 30,
    "question": "Which tool is used to simulate a mobile device on a computer for Flutter testing?",
    "options": [
      "DevTools",
      "Inspector",
      "Emulator",
      "Hot reload"
    ],
    "answer": 2,
    "explanation": "Android Emulator (AVD) hoặc iOS Simulator cho phép test app mà không cần thiết bị thật.",
    "category": "Testing & Architecture"
  },
  {
    "id": 31,
    "question": "Which platforms can Flutter applications target using a single codebase?",
    "options": [
      "Android only",
      "iOS only",
      "Android, iOS, web, and desktop",
      "Web servers only"
    ],
    "answer": 2,
    "explanation": "Flutter hỗ trợ đa nền tảng từ 1 codebase duy nhất.",
    "category": "Forms & Authentication"
  },
  {
    "id": 32,
    "question": "Which widget reacts to async data from local storage?",
    "options": [
      "FutureBuilder",
      "StreamBuilder",
      "ListView",
      "Provider"
    ],
    "answer": 0,
    "explanation": "FutureBuilder lắng nghe Future (ví dụ đọc SharedPreferences) và rebuild UI khi có dữ liệu.",
    "category": "Forms & Authentication"
  },
  {
    "id": 33,
    "question": "Which widget is best suited to listen to real-time data from Firebase Firestore?",
    "options": [
      "FutureBuilder",
      "StreamBuilder",
      "ListView",
      "Provider"
    ],
    "answer": 1,
    "explanation": "Firebase trả về Stream<QuerySnapshot>, StreamBuilder rebuild UI mỗi khi có document mới.",
    "category": "Data, API & Storage"
  },
  {
    "id": 34,
    "question": "Which Flutter widget is used to display a scrollable list of items?",
    "options": [
      "FutureBuilder",
      "StreamBuilder",
      "ListView",
      "Provider"
    ],
    "answer": 2,
    "explanation": "ListView.builder() tạo danh sách cuộn hiệu quả với lazy loading từng item.",
    "category": "Dart Fundamentals"
  },
  {
    "id": 35,
    "question": "Which package provides InheritedWidget-based state management in Flutter?",
    "options": [
      "FutureBuilder",
      "StreamBuilder",
      "ListView",
      "Provider"
    ],
    "answer": 3,
    "explanation": "Package provider của Remi Rousselet wrap InheritedWidget để quản lý và chia sẻ state.",
    "category": "State Management"
  },
  {
    "id": 36,
    "question": "Why are widgets lightweight in Flutter?",
    "options": [
      "They manage system resources",
      "They are immutable descriptions",
      "They store UI state",
      "They handle rendering directly"
    ],
    "answer": 1,
    "explanation": "Widget chỉ là bản mô tả (description) bất biến của UI, không phải object nặng — Element và RenderObject mới là thứ thực sự render.",
    "category": "Animation & Performance"
  },
  {
    "id": 37,
    "question": "Which approach helps reduce unnecessary widget rebuilds?",
    "options": [
      "Using global variables",
      "Fine-grained state updates",
      "Hot restart",
      "Large widgets"
    ],
    "answer": 1,
    "explanation": "Cập nhật state chính xác, nhỏ (fine-grained) giúp chỉ rebuild phần cần thiết.",
    "category": "Animation & Performance"
  },
  {
    "id": 38,
    "question": "Which action best demonstrates Flutter's reactive Ul model?",
    "options": [
      "Manually updating Ul elements",
      "Rebuilding UI in response to state changes",
      "Editing layout XML",
      "Calling native APIs"
    ],
    "answer": 1,
    "explanation": "Reactive = UI tự động cập nhật khi state thay đổi, không cần lệnh update thủ công.",
    "category": "State Management"
  },
  {
    "id": 39,
    "question": "Which package supports BLoC architecture?",
    "options": [
      "provider",
      "flutter_bloc",
      "sqflite",
      "http"
    ],
    "answer": 1,
    "explanation": "Package flutter_bloc cung cấp Bloc, Cubit, BlocBuilder,... để implement BLoC pattern.",
    "category": "State Management"
  },
  {
    "id": 40,
    "question": "Which Flutter package uses ChangeNotifier for lightweight state management?",
    "options": [
      "provider",
      "flutter_bloc",
      "sqflite",
      "http"
    ],
    "answer": 0,
    "explanation": "ChangeNotifierProvider lắng nghe notifyListeners() và rebuild widget liên quan.",
    "category": "Animation & Performance"
  },
  {
    "id": 41,
    "question": "Which package allows Flutter apps to perform local SQL database operations?",
    "options": [
      "provider",
      "flutter_bloc",
      "sqflite",
      "http"
    ],
    "answer": 2,
    "explanation": "Cung cấp API để tạo bảng, insert, query, update, delete dữ liệu SQLite trên device.",
    "category": "Forms & Authentication"
  },
  {
    "id": 42,
    "question": "Which package is used to make REST API calls in Flutter?",
    "options": [
      "provider",
      "flutter_bloc",
      "sqflite",
      "http"
    ],
    "answer": 3,
    "explanation": "http.get(Uri.parse(url)) thực hiện HTTP GET request và trả về Response object.",
    "category": "Data, API & Storage"
  },
  {
    "id": 43,
    "question": "Which widget can hide user input text when configured for password entry?",
    "options": [
      "TextField",
      "ObscureText",
      "Securelnput",
      "PasswordField"
    ],
    "answer": 0,
    "explanation": "TextField với thuộc tính obscureText: true sẽ ẩn nội dung nhập (dùng cho password).",
    "category": "Forms & Authentication"
  },
  {
    "id": 44,
    "question": "Which property of TextField is set to true to hide password characters?",
    "options": [
      "hideText",
      "obscureText",
      "secureInput",
      "passwordMode"
    ],
    "answer": 1,
    "explanation": "TextField(obscureText: true) thay thế ký tự nhập bằng dấu chấm/bullet.",
    "category": "Forms & Authentication"
  },
  {
    "id": 45,
    "question": "Which widget in Flutter is used to collect single-line text input from users?",
    "options": [
      "TextFormField",
      "TextField",
      "InputField",
      "EditText"
    ],
    "answer": 1,
    "explanation": "Widget nhập liệu cơ bản của Flutter, dùng TextEditingController để lấy giá trị.",
    "category": "Widgets & UI"
  },
  {
    "id": 46,
    "question": "Which widget is recommended for use inside a Flutter Form widget for validation?",
    "options": [
      "TextField",
      "TextFormField",
      "InputField",
      "SecureInput"
    ],
    "answer": 1,
    "explanation": "Tích hợp sẵn với Form và GlobalKey<FormState>, hỗ trợ validator callback.",
    "category": "Forms & Authentication"
  },
  {
    "id": 47,
    "question": "What is the purpose of SliverAppBar?",
    "options": [
      "Static app bar",
      "Scrollable flexible app bar",
      "Bottom navigation",
      "Drawer control"
    ],
    "answer": 1,
    "explanation": "SliverAppBar là app bar có thể thu/phóng và cuộn theo nội dung, dùng trong CustomScrollView.",
    "category": "Widgets & UI"
  },
  {
    "id": 48,
    "question": "Which method resets all form fields?",
    "options": [
      "clear()",
      "reset()",
      "dispose()",
      "remove("
    ],
    "answer": 1,
    "explanation": "GlobalKey<FormState().currentState!.reset() xóa và reset tất cả các field trong Form.",
    "category": "Forms & Authentication"
  },
  {
    "id": 49,
    "question": "Which method on TextEditingController clears the text in a single input field?",
    "options": [
      "reset()",
      "clear()",
      "dispose()",
      "remove()"
    ],
    "answer": 1,
    "explanation": "_controller.clear() xóa nội dung của TextField được gắn với controller đó.",
    "category": "Widgets & UI"
  },
  {
    "id": 50,
    "question": "Which lifecycle method should be called to free resources of a TextEditingController?",
    "options": [
      "reset()",
      "clear()",
      "dispose()",
      "remove()"
    ],
    "answer": 2,
    "explanation": "Override dispose() trong StatefulWidget và gọi _controller.dispose() để tránh memory leak.",
    "category": "Animation & Performance"
  },
  {
    "id": 51,
    "question": "Which method on FormState validates all fields and returns true if all pass?",
    "options": [
      "validate()",
      "reset()",
      "save()",
      "check()"
    ],
    "answer": 0,
    "explanation": "_formKey.currentState!.validate() chạy tất cả validator và trả về true nếu hợp lệ.",
    "category": "Forms & Authentication"
  },
  {
    "id": 52,
    "question": "Why is secure authentication critical in mobile apps?",
    "options": [
      "Ul quality",
      "Protect user data",
      "Reduce code",
      "Improve speed"
    ],
    "answer": 1,
    "explanation": "Authentication bảo vệ dữ liệu cá nhân và tài khoản người dùng khỏi truy cập trái phép.",
    "category": "Forms & Authentication"
  },
  {
    "id": 53,
    "question": "Which HTTP method is typically used to retrieve data?",
    "options": [
      "POST",
      "PUT",
      "GET",
      "DELETE"
    ],
    "answer": 2,
    "explanation": "HTTP GET dùng để lấy dữ liệu từ server, không thay đổi dữ liệu phía server.",
    "category": "Data, API & Storage"
  },
  {
    "id": 54,
    "question": "Why is Chapter 13 considered optional (Plus)?",
    "options": [
      "It replaces core concepts",
      "Apps can work without deeр optimization",
      "It manages navigation",
      "It handles authentication"
    ],
    "answer": 1,
    "explanation": "Tối ưu hóa nâng cao là \"nice to have\", app vẫn hoạt động được mà không cần nó.",
    "category": "Flutter Essentials"
  },
  {
    "id": 55,
    "question": "Why should authentication state be centralized?",
    "options": [
      "Reduce UI code",
      "Ensure consistent access control",
      "Improve animations",
      "Simplify layout"
    ],
    "answer": 1,
    "explanation": "State auth tập trung giúp toàn bộ app kiểm tra quyền truy cập nhất quán, tránh lỗ hổng bảo mật.",
    "category": "Forms & Authentication"
  },
  {
    "id": 56,
    "question": "Which Dart keyword is used to define a constant value at compile time?",
    "options": [
      "final",
      "static",
      "const",
      "var"
    ],
    "answer": 2,
    "explanation": "const tạo giá trị hằng số tại compile-time. (final chỉ là runtime constant.)",
    "category": "Dart Fundamentals"
  },
  {
    "id": 57,
    "question": "Which Dart keyword declares a variable that can only be assigned once but at runtime?",
    "options": [
      "const",
      "final",
      "static",
      "var"
    ],
    "answer": 1,
    "explanation": "final name = getUserName() gán một lần khi runtime, không thể reassign sau đó.",
    "category": "Dart Fundamentals"
  },
  {
    "id": 58,
    "question": "Which Dart keyword makes a class member belong to the class itself rather than an instance?",
    "options": [
      "const",
      "final",
      "static",
      "var"
    ],
    "answer": 2,
    "explanation": "static int count = 0 truy cập qua tên class (MyClass.count), không cần tạo object.",
    "category": "Dart Fundamentals"
  },
  {
    "id": 59,
    "question": "Which Dart keyword declares a mutable variable with inferred type?",
    "options": [
      "const",
      "final",
      "static",
      "var"
    ],
    "answer": 3,
    "explanation": "var score = 0; score = 10; — type được suy luận là int, giá trị có thể thay đổi.",
    "category": "Dart Fundamentals"
  },
  {
    "id": 60,
    "question": "Which status code indicates server error?",
    "options": [
      "200",
      "301",
      "404",
      "500"
    ],
    "answer": 3,
    "explanation": "500 là nhóm lỗi server. 200 = OK, 301 = Redirect, 404 = Not Found.",
    "category": "Flutter Essentials"
  },
  {
    "id": 61,
    "question": "What is the role of events in BLoC?",
    "options": [
      "Store UI",
      "Trigger state changes",
      "Render widgets",
      "Handle layout"
    ],
    "answer": 1,
    "explanation": "Trong BLoC, Event được dispatch vào Bloc để kích hoạt logic xử lý và tạo ra State mới.",
    "category": "State Management"
  },
  {
    "id": 62,
    "question": "Which widget allows overlapping of its child widgets?",
    "options": [
      "Column",
      "Row",
      "Stack",
      "Expanded"
    ],
    "answer": 2,
    "explanation": "Stack xếp chồng các widget con lên nhau, cho phép overlap.",
    "category": "Widgets & UI"
  },
  {
    "id": 63,
    "question": "What does CurvedAnimation provide?",
    "options": [
      "Layout control",
      "Animation curve behavior",
      "State updates",
      "Navigation"
    ],
    "answer": 1,
    "explanation": "CurvedAnimation bọc AnimationController và áp dụng đường cong (easing) như Curves.easeIn lên animation.",
    "category": "Animation & Performance"
  },
  {
    "id": 64,
    "question": "Which type of test checks individual functions or classes?",
    "options": [
      "Widget test",
      "Integration test",
      "Unit test",
      "System test"
    ],
    "answer": 2,
    "explanation": "Unit test kiểm tra logic của từng hàm/class riêng lẻ, không phụ thuộc UI hay external service.",
    "category": "Testing & Architecture"
  },
  {
    "id": 65,
    "question": "Which type of Flutter test renders a widget and simulates user interactions like tapping?",
    "options": [
      "Unit test",
      "Widget test",
      "Integration test",
      "System test"
    ],
    "answer": 1,
    "explanation": "Dùng WidgetTester, find.byType(), tester.tap() để test UI component.",
    "category": "Testing & Architecture"
  },
  {
    "id": 66,
    "question": "Which type of test runs the full Flutter app on a real device or emulator to verify complete user flows?",
    "options": [
      "Unit test",
      "Widget test",
      "Integration test",
      "System test"
    ],
    "answer": 2,
    "explanation": "Dùng integration_test package, test toàn bộ luồng như login → navigate → logout.",
    "category": "Testing & Architecture"
  },
  {
    "id": 67,
    "question": "Which Flutter test type is fastest to run and has no dependency on UI or platform?",
    "options": [
      "Unit test",
      "Widget test",
      "Integration test",
      "System test"
    ],
    "answer": 0,
    "explanation": "Chỉ test pure Dart logic, không cần Flutter framework, chạy rất nhanh.",
    "category": "Testing & Architecture"
  },
  {
    "id": 68,
    "question": "What is the main purpose of hot reload in Flutter?",
    "options": [
      "Improve runtime performance",
      "Instantly reflect code changes in Ul",
      "Publish apps faster",
      "Reduce memory usage"
    ],
    "answer": 1,
    "explanation": "Hot reload inject code mới vào Dart VM đang chạy và rebuild widget tree mà không mất state.",
    "category": "State Management"
  },
  {
    "id": 69,
    "question": "Which phase involves gathering requirements?",
    "options": [
      "Implementation",
      "Design",
      "Analysis",
      "Testing"
    ],
    "answer": 2,
    "explanation": "Phase Analysis (phân tích) là nơi thu thập và phân tích yêu cầu từ stakeholders.",
    "category": "Testing & Architecture"
  },
  {
    "id": 70,
    "question": "Which SDLC phase involves writing code based on design specifications?",
    "options": [
      "Analysis",
      "Design",
      "Implementation",
      "Testing"
    ],
    "answer": 2,
    "explanation": "Dev team code theo technical design document, API spec, và UI mockup.",
    "category": "Testing & Architecture"
  },
  {
    "id": 71,
    "question": "Which phase of software development creates the system architecture and UI mockups?",
    "options": [
      "Analysis",
      "Design",
      "Implementation",
      "Testing"
    ],
    "answer": 1,
    "explanation": "Tạo ERD, class diagram, wireframe, API contract dựa trên yêu cầu từ phase Analysis.",
    "category": "Testing & Architecture"
  },
  {
    "id": 72,
    "question": "Which SDLC phase verifies that the software meets the original requirements?",
    "options": [
      "Analysis",
      "Design",
      "Implementation",
      "Testing"
    ],
    "answer": 3,
    "explanation": "QA team chạy unit test, integration test, UAT để xác nhận sản phẩm đúng yêu cầu.",
    "category": "Testing & Architecture"
  },
  {
    "id": 73,
    "question": "Why are forms important in mobile applications?",
    "options": [
      "UI decoration",
      "User data collection",
      "State management",
      "Navigation"
    ],
    "answer": 1,
    "explanation": "Form là cơ chế chính để thu thập input từ người dùng (đăng ký, đăng nhập, thanh toán,...).",
    "category": "Forms & Authentication"
  },
  {
    "id": 74,
    "question": "Why should database operations be asynchronous?",
    "options": [
      "Simplify syntax",
      "Avoid blocking UI thread",
      "Reduce code",
      "Improve theme"
    ],
    "answer": 1,
    "explanation": "I/O operations chạy bất đồng bộ (async/await) để không làm đóng băng UI thread (main thread).",
    "category": "Data, API & Storage"
  },
  {
    "id": 75,
    "question": "Which widget applies a theme to an entire Flutter application?",
    "options": [
      "Scaffold",
      "Theme",
      "MaterialApp",
      "Container"
    ],
    "answer": 2,
    "explanation": "MaterialApp có thuộc tính theme và darkTheme áp dụng ThemeData cho toàn bộ app.",
    "category": "Widgets & UI"
  },
  {
    "id": 76,
    "question": "Which widget provides the basic visual structure for a single screen including AppBar and body?",
    "options": [
      "MaterialApp",
      "Scaffold",
      "Theme",
      "Container"
    ],
    "answer": 1,
    "explanation": "Hầu hết mọi màn hình Flutter đều bọc nội dung trong Scaffold.",
    "category": "Widgets & UI"
  },
  {
    "id": 77,
    "question": "Which widget allows you to override the theme for a specific subtree of widgets?",
    "options": [
      "MaterialApp",
      "Scaffold",
      "Theme",
      "Container"
    ],
    "answer": 2,
    "explanation": "Theme(data: ThemeData(...), child: ...) ghi đè theme cho widget con bên trong.",
    "category": "Widgets & UI"
  },
  {
    "id": 78,
    "question": "Which Flutter widget is used to add padding, background color, and decoration to a child widget?",
    "options": [
      "MaterialApp",
      "Scaffold",
      "Theme",
      "Container"
    ],
    "answer": 3,
    "explanation": "Kết hợp padding, margin, decoration, constraints trong một widget tiện lợi.",
    "category": "Widgets & UI"
  },
  {
    "id": 79,
    "question": "What is the purpose of parsing JSON?",
    "options": [
      "Encrypt data",
      "Convert JSON into Dart objects",
      "Send requests",
      "Cache responses"
    ],
    "answer": 1,
    "explanation": "JSON parsing (dùng jsonDecode + fromJson) chuyển chuỗi JSON từ API thành Dart object để sử dụng.",
    "category": "Data, API & Storage"
  },
  {
    "id": 80,
    "question": "Which Dart function converts a JSON string into a Map or List object?",
    "options": [
      "jsonEncode()",
      "jsonDecode()",
      "jsonParse()",
      "jsonConvert()"
    ],
    "answer": 1,
    "explanation": "jsonDecode('{\"name\":\"An\"}') trả về Map<String, dynamic> trong Dart.",
    "category": "Data, API & Storage"
  },
  {
    "id": 81,
    "question": "What is the purpose of jsonEncode() in Dart?",
    "options": [
      "Convert Dart object to JSON string",
      "Parse JSON to Dart",
      "Send HTTP request",
      "Encrypt data"
    ],
    "answer": 0,
    "explanation": "Dùng trước khi gửi data lên API qua POST/PUT request.",
    "category": "Data, API & Storage"
  },
  {
    "id": 82,
    "question": "Which method in a Dart model class is responsible for creating an object from a JSON Map?",
    "options": [
      "toJson()",
      "fromJson()",
      "encode()",
      "parse()"
    ],
    "answer": 1,
    "explanation": "User.fromJson(map) là factory constructor nhận Map<String, dynamic> và trả về object.",
    "category": "Data, API & Storage"
  },
  {
    "id": 83,
    "question": "How can data be passed to a new screen?",
    "options": [
      "Using global variables",
      "Via constructor arguments",
      "Using ThemeData",
      "Using Scaffold"
    ],
    "answer": 1,
    "explanation": "Cách phổ biến nhất là truyền data qua constructor của widget màn hình mới khi Navigator.push().",
    "category": "Widgets & UI"
  },
  {
    "id": 84,
    "question": "What is the main benefit of Flutter's widgetbased architecture?",
    "options": [
      "Widgets are only used for layout design",
      "Widgets allow code reuse across platforms",
      "Widgets automatically manage databases",
      "Widgets replace backend services"
    ],
    "answer": 1,
    "explanation": "Widget-based architecture cho phép tái sử dụng component trên mọi nền tảng Flutter hỗ trợ.",
    "category": "Widgets & UI"
  },
  {
    "id": 85,
    "question": "Which Dart data structure is best suited for storing an ordered collection of items?",
    "options": [
      "Set",
      "Map",
      "List",
      "Queue"
    ],
    "answer": 2,
    "explanation": "List trong Dart là mảng có thứ tự (ordered). Set = không trùng, Map = key-value, Queue = hàng đợi.",
    "category": "Dart Fundamentals"
  },
  {
    "id": 86,
    "question": "Which Dart collection ensures all elements are unique?",
    "options": [
      "List",
      "Map",
      "Set",
      "Queue"
    ],
    "answer": 2,
    "explanation": "{1, 2, 3, 2} sẽ tự động loại bỏ duplicate, kết quả là {1, 2, 3}.",
    "category": "Dart Fundamentals"
  },
  {
    "id": 87,
    "question": "Which Dart data structure stores data as key-value pairs?",
    "options": [
      "List",
      "Map",
      "Set",
      "Queue"
    ],
    "answer": 1,
    "explanation": "Map<String, int> scores = {'An': 90, 'Bình': 85} truy cập qua scores['An'].",
    "category": "Dart Fundamentals"
  },
  {
    "id": 88,
    "question": "Which Dart collection is optimized for adding/removing elements from both ends efficiently?",
    "options": [
      "List",
      "Map",
      "Set",
      "Queue"
    ],
    "answer": 3,
    "explanation": "Queue từ dart:collection có addFirst(), addLast(), removeFirst() với O(1).",
    "category": "Dart Fundamentals"
  },
  {
    "id": 89,
    "question": "Which Flutter widget reacts to authentication state changes?",
    "options": [
      "FutureBuilder",
      "StreamBuilder",
      "ListView",
      "Form"
    ],
    "answer": 1,
    "explanation": "StreamBuilder lắng nghe Stream (ví dụ Firebase Auth stream) và rebuild UI khi auth state thay đổi.",
    "category": "Forms & Authentication"
  },
  {
    "id": 90,
    "question": "Which widget would you use to display data from a one-time HTTP API call?",
    "options": [
      "StreamBuilder",
      "FutureBuilder",
      "ListView",
      "Form"
    ],
    "answer": 1,
    "explanation": "FutureBuilder(future: http.get(url), builder: ...) render UI theo trạng thái của Future.",
    "category": "Data, API & Storage"
  },
  {
    "id": 91,
    "question": "Which widget efficiently renders a large scrollable list of items in Flutter?",
    "options": [
      "StreamBuilder",
      "FutureBuilder",
      "ListView.builder",
      "Form"
    ],
    "answer": 2,
    "explanation": "Lazy render chỉ các item visible trên màn hình, hiệu quả với danh sách lớn.",
    "category": "Dart Fundamentals"
  },
  {
    "id": 92,
    "question": "Which widget in Flutter is used to group multiple input fields with validation logic?",
    "options": [
      "StreamBuilder",
      "FutureBuilder",
      "ListView",
      "Form"
    ],
    "answer": 3,
    "explanation": "Bọc các TextFormField, gọi validate() và save() qua GlobalKey<FormState>.",
    "category": "Forms & Authentication"
  },
  {
    "id": 93,
    "question": "Why should animations be disposed properly?",
    "options": [
      "Improve UI",
      "Prevent memory leaks",
      "Speed up builds",
      "Fix layout"
    ],
    "answer": 1,
    "explanation": "AnimationController cần được dispose() trong dispose() của State để giải phóng bộ nhớ.",
    "category": "Animation & Performance"
  },
  {
    "id": 94,
    "question": "Which lifecycle method in Flutter StatefulWidget should call AnimationController.dispose()?",
    "options": [
      "initState()",
      "build()",
      "dispose()",
      "setState()"
    ],
    "answer": 2,
    "explanation": "Override dispose() và gọi _controller.dispose() khi widget bị xóa khỏi tree.",
    "category": "Animation & Performance"
  },
  {
    "id": 95,
    "question": "Which method is used to initialize an AnimationController in a StatefulWidget?",
    "options": [
      "build()",
      "dispose()",
      "initState()",
      "setState()"
    ],
    "answer": 2,
    "explanation": "_controller = AnimationController(vsync: this, duration: ...) đặt trong initState().",
    "category": "Animation & Performance"
  },
  {
    "id": 96,
    "question": "What happens if an AnimationController is NOT disposed when the widget is removed?",
    "options": [
      "App crashes immediately",
      "Memory leak occurs",
      "Animation speeds up",
      "Build fails"
    ],
    "answer": 1,
    "explanation": "Controller vẫn tồn tại trong bộ nhớ và tiếp tục tick dù widget đã bị hủy.",
    "category": "Animation & Performance"
  },
  {
    "id": 97,
    "question": "Which widget is best used to add fixed empty spасе?",
    "options": [
      "Padding",
      "Expanded",
      "SizedBox",
      "Container"
    ],
    "answer": 2,
    "explanation": "SizedBox(height: 16) hoặc SizedBox(width: 16) là cách chuẩn để thêm khoảng trống cố định.",
    "category": "Widgets & UI"
  },
  {
    "id": 98,
    "question": "Which step is required before running a Flutter app for the first time?",
    "options": [
      "Publishing the app",
      "Setting up the Flutter SDK",
      "Configuring a database",
      "Writing backend APIs"
    ],
    "answer": 1,
    "explanation": "Bước đầu tiên bắt buộc là cài đặt Flutter SDK và cấu hình môi trường (flutter doctor).",
    "category": "Flutter CLI & Tools"
  }
];
